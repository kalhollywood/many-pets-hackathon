// - Take a base price of £120 / year (£10 a month)
// - Add an increase of 5% to the price for each year up to 5 and 10% for each year past that up to 10
// - Apply a 10% lower price to 3 breeds
// - Apply a 15% higher price to 3 address areas
// - Apply the multi-pet discount at 10% for each pet when 2 or more pets are included



// DATA STRUCTURE
// Array[
// {	Pet: String
//   Year Age:  Integer
//   Month Age: Integer
//   Breed : String
//   Address : String
//   }, 
//   {	Pet: cat || dog
//   Year Age:  1-20yrs
//   Month Age: 1-12months
//   Breed : search
//   Address : search
//   }
//   ]
  
// PLAN 
// Create functions for each of the calculations 

// e.g. base price = 120
// 0-5 years = 120*1.05^(n)
// 6-10 years = 120*1.05^(5)*1.1^(n)

const basePrice = 120

const discountedBreeds = [
  `alsatian`,
  `poodle`,
  `shih tzu`
]

const IncreasedAreas = [
  `SE10`,
  `B32`,
  `NW10`
]

export const calculateIncreaseByYears = (n)=> {
  if (n >= 6) {
    return calculatePriceSixAndPlus(n)
  }
  if (n >= 0 && n < 6) {
    return calculatePriceUnderSix(n)
  }
  return 0;
}

const calculatePriceUnderSix =(n)=> {
   console.log(`basePrice >>`, basePrice);
  let calc = basePrice*0.05*n
  
  console.log(`calc >>`, calc);
  return calc;
}

const calculatePriceSixAndPlus =(n)=> {
     console.log(`basePrice >>`, basePrice);
    let calc = basePrice*0.25 + basePrice*0.1*(n-5)
     console.log(`calc >>`, calc);
    return calc;
}

const isDiscountedBreed = (breed) => {
  const result = discountedBreeds.some((item) => item === breed)
  console.log(`isDiscountedBreed >>`, result)
  return result

}

// console.log(`isDiscountedBreed`);
// isDiscountedBreed(`poodle`)

export const calculateDiscountByBreed = (breed) => {
  let result = 0
  if (isDiscountedBreed(breed)) {
    result = -0.1
    console.log(`isDiscountedBreed Result>>`, result)
    return result
  }
  console.log(`isDiscountedBreed Result>>`, result)
  return result
}


const isIncreasedArea = (area) => {
  const result = IncreasedAreas.some((item) => item === area)
  console.log(`isIncreasedArea >>`, result)
  return result

}

export const calculateIncreaseByArea = (area) => {
  let result = 0
  if (isIncreasedArea(area)) {
    result = 0.15
    console.log(`calculateIncreaseByArea Result>>`, result)
    return result
  }
  console.log(`calculateIncreaseByArea Result>>`, result)
  return result
}

//calculatePriceFivePlus(10);
console.log(`10 year`);
calculateIncreaseByYears(10)
console.log(`5 year`);
calculateIncreaseByYears(5)
console.log(`calculateDiscountByBreed`)
calculateDiscountByBreed(`dog`)
calculateIncreaseByArea(`BBBB`)

export const isMultiplePets = (arr) => {
  let result = 0
  if (arr.length > 1) {
    result = -0.1
    console.log(`isMultiplePets Result>>`, result)
    return result
  }
  console.log(`isMultiplePets Result>>`, result)
  return result
}