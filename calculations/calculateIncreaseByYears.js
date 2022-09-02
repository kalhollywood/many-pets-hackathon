export const calculateIncreaseByYears = (n)=> {
  if (n >= 6) {
    return calculatePriceSixAndPlus(n)
  }
  if (n >= 0 && n < 6) {
    return calculatePriceUnderSix(n)
  }
  return 0;
}

const basePrice = 120

const calculatePriceUnderSix =(n)=> {

  // console.log(`n >>`, n);
   
  let calc = 0.05*n
  
  // console.log(`calculatePriceUnderSix >>`, calc);
  return calc;
}

const calculatePriceSixAndPlus =(n)=> {
     if(n > 10){
      n = 10
     }
     
     let calc = 0.25 + 0.1*(n-5)
    //  console.log(`calculatePriceSixAndPlus >>`, calc);
    return calc;
}

calculateIncreaseByYears(20)