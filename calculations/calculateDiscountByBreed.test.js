import {describe, test, expect} from "@jest/globals";

import {
  calculateDiscountByBreed,
  discountedBreeds
} from './calculateDiscountByBreed.js'

describe('check that calculateDiscountByBreed correctly discounted the dog breeds specified', 
  ()=> {
    console.log(`1st test`, Date())
    discountedBreeds.forEach((breed) => 
      test(`this breed returns the discount 0.1 = 10%`,
        () => {
          expect(calculateDiscountByBreed(breed)).toEqual(-0.1)
        }
      )
    ) 
  }
)