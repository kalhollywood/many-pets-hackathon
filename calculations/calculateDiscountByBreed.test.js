import {describe, test, expect} from "@jest/globals";

import {calculateDiscountByBreed} from './calculateDiscountByBreed.js'

describe('check that calculateDiscountByBreed correctly discounted the dog breeds specified', 
  ()=> {
    console.log(`1st test`, Date())
    test(`111`,
      () => {expect(true).toBe(false)}
  ) ,
    console.log(`2nd test`, Date())
    test(`222`,
    () => {expect(true).toBe(false)}  
  ), 
    console.log(`3rd test`, Date())
    test(`333`,
    () => {expect(true).toBe(false)}
    )
    console.log(`4th test`, Date())
    test(`444`,
    () => {expect(true).toBe(false)}
    )
}
)