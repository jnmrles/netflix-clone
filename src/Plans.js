import React, { useState, useEffect } from "react";
import db from "./firebase";

function Plans() {
  const [products, setProducts] = useState([]);

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

  const loadCheckout = async (priceId) => {};

  return (
    <div className="Plans">
      {Object.entries(products).map((product) => {
        //Add logic to see if theres an active sub
        const id = product[0];
        const data = product[1];

        return (
          <div key={id} className="plans_singlePlan">
            <div className="plans_info">
              <h5>{data.name}</h5>
              <h6>{data.description}</h6>
            </div>
            <button
              onClick={() => {
                loadCheckout(data.prices.priceId);
              }}
            >
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Plans;
