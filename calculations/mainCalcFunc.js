import {calculateIncreaseByArea} from './calculateIncreaseByArea.js'
import {calculateDiscountByBreed} from './calculateDiscountByBreed.js'
import {calculateIncreaseByYears} from './calculateIncreaseByYears.js'

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

  const individualQuote = 
    basePrice * 
    (
      1 + calculateIncreaseByYears(obj.years)
      + calculateDiscountByBreed(obj.breed)
      + calculateIncreaseByArea(obj.area)
    )

  return individualQuote
}

export const buildQuoteForArray = (array) => {

  const isMultiplePets = (item) => array.length > 1 ? buildQuoteForEach(item)*0.9 : buildQuoteForEach(item)

  const totalQuote = array.reduce((prev, current)=> 
    prev + isMultiplePets(current), 0)
  
  return totalQuote;
}


