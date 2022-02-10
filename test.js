console.log(11%10)

function additionWithoutCarrying(param1, param2) {
  // must start a sum in which we will append to
  let sum = 0;
  
  // we start in the ones place when using column addition
  let placeHolder = 1
  // if both params are 0, the end sum will be 0
  while(param1 > 0 && param2 > 0 ){
      if(param1 === 0 || param2 === 0){
          sum += param1 !== 0? param1 :param2
          break;
      }else{
      sum += placeHolder *((param1+param2)%10)
      param1 = Math.floor(param1/10)
      param2 = Math.floor(param2/10)
      placeHolder *= 10
          
      }

      
  }
  return sum

}

