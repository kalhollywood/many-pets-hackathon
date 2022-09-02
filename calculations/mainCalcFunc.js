//PLAN

// import {
//   isMultiplePets
// } from './isMultiplePets.js'

import {
  calculateIncreaseByArea
} from './calculateIncreaseByArea.js'

import {
  calculateDiscountByBreed
} from './calculateDiscountByBreed.js'

import {
  calculateIncreaseByYears
} from './calculateIncreaseByYears.js'

const testArray = [
  {	
    pet: `Dog`,
    years:  2,
    breed : `spaniel`,
    area : `B32`
  },
  {	
    pet: `Dog`,
    years:  2,
    breed : `shih tzu`,
    area : `SE23`
  }
  ]

const basePrice = 120

const buildQuoteForEach = (obj) => {

  //depending on struc of obj.address may need logic to 
  //get substring of obj.address as postcode for example SE23 

  const individualQuote = 
    basePrice * 
    (
      1 + calculateIncreaseByYears(obj.years)
      + calculateDiscountByBreed(obj.breed)
      + calculateIncreaseByArea(obj.area)
    )

  console.log(`Individual Quote >>` , individualQuote)
  return individualQuote
}

export const buildQuoteForArray = (array) => {

  console.log(`array`, array)


  // const isMultiplePetsResult = isMultiplePets(array)
  // console.log(`isMultiplePetsResult >> from the `, isMultiplePetsResult)

  const isMultiplePets = (item) => array.length > 1 ? buildQuoteForEach(item)*0.9 : buildQuoteForEach(item)

  const totalQuote = array.reduce((prev, current)=> 
    prev + isMultiplePets(current), 0)
  console.log(`totalQuote >>` , totalQuote)
  
  // if(array.length > 1) {
  //   return totalQuote

  // }
  
  return totalQuote;
}

const testArray1 = [
  1,
  2
]

//test
console.log(buildQuoteForArray(testArray))

