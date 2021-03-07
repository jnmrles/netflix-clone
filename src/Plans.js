import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./Plans.css";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function Plans() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [sub, setSub] = useState(null);
  const dte = new Date(sub?.current_period_end * 1000).toDateString();
  console.log(dte);
  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach(async (subscription) => {
          setSub({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start: subscription.data().current_period_start
              .seconds,
          });
        });
      });
  }, [user.uid]);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapShot) => {
        const products = [];
        querySnapShot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert(`ERROR WITH MESSAGE: ${error.nessage} `);
      }
      if (sessionId) {
        // We have a session, let's redirect to checkout
        // Init Stripe
        const stripe = await loadStripe("pk_test_teWRja4PyjtX2iWI4KrEqw6x");
        await stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="Plans">
      {sub && <p>Renewal Date: {dte}</p>}
      {Object.entries(products).map((product) => {
        //Add logic to see if theres an active sub
        const id = product[0];
        const data = product[1];
        const isCurrentSub = data.name?.toLowerCase().includes(sub?.role);

        return (
          <div
            key={id}
            className={`${
              isCurrentSub && "disable plans_singlePlan--disabled"
            } plans_singlePlan`}
          >
            <div className="plans_info">
              <h5>{data.name}</h5>
              <h6>{data.description}</h6>
            </div>
            <button
              onClick={() => {
                !isCurrentSub && loadCheckout(data.prices.priceId);
              }}
            >
              {isCurrentSub ? "Active Sub" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
