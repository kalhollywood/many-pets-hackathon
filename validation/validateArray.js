import {validatePostcode} from './validatePostcode.js'
import {validateBreed} from './validateBreed.js'

export const validateArray = async (array)=> {

  const resultsOfPostcodeValidation = await isValidPostcode(array)
  console.log(`resultsOfPostcodeValidation >>>`, resultsOfPostcodeValidation)

  const resultsOfBreedValidation = await isValidBreed(array)
  console.log(`resultsOfBreedValidation >>>`, resultsOfBreedValidation)

  const notValid = resultsOfPostcodeValidation
    .concat(resultsOfBreedValidation).filter((item)=> !item)
  console.log(`notValid >>>`, notValid)

  if (notValid.length > 0) {
    return false
  }
  return true
}

const isValidPostcode = async (array)=> await Promise.all (array.map(async (item)=> await validatePostcode(item.postcode)))

const isValidBreed = async (array)=> await Promise.all (array.map(async (item)=> await validateBreed(item.pet, item.breed)))

const testArray = [
  {
    pet: "dog",
    years:  2,
    breed : "spaniel",
    area : "B32",
    postcode : "gadsgAD"
  }
]

// console.log(`validateArray >>`, await validateArray(testArray))