//PLAN

import {
  isMultiplePets
} from './isMultiplePets.js'

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
    Pet: `Dog`,
    Years:  2,
    Breed : `spaniel`,
    Area : `B32`
  },
  // {	
  //   Pet: `Dog`,
  //   Years:  2,
  //   Breed : `shih tzu`,
  //   Area : `SE23`
  // }
  ]

const basePrice = 120

const buildQuoteForEach = (obj, isMultiplePetsResult) => {

  //depending on struc of obj.address may need logic to 
  //get substring of obj.address as postcode for example SE23 

  const individualQuote = 
    basePrice * 
    (
      1 + calculateIncreaseByYears(obj.years)
      + calculateDiscountByBreed(obj.breed)
      + calculateIncreaseByArea(obj.area)
      + isMultiplePetsResult
    )

  console.log(`Individual Quote >>` , individualQuote)
  return individualQuote
}

export const buildQuoteForArray = (array) => {

  const isMultiplePetsResult = isMultiplePets(array)
  console.log(`isMultiplePetsResult >> from the `, isMultiplePetsResult)

  // const totalQuote = array.reduce((prev, current)=> 
  //   prev + buildQuoteForEach(current, isMultiplePetsResult), 0)
  // console.log(`totalQuote >>` , totalQuote)
  return totalQuote;
}

const testArray1 = [
  1,
  2
]

//test
buildQuoteForArray(testArray)

