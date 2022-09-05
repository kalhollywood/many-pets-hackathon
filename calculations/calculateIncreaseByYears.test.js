import {describe, test, expect} from "@jest/globals";

import { calculateIncreaseByYears } from './calculateIncreaseByYears.js'

describe('check that calculateIncreaseByYears returns the correct increase to quote based on age', 
  ()=> {
    console.log(`1st test`, Date())
    test(`age 0 returns a 0 = 0% increase`,
      () => {
        expect(calculateIncreaseByYears(0)).toEqual(0)
      }
    )
    console.log(`2nd test`, Date())
    test(`age 10 returns a 0.75 = 75% increase`,
      () => {
        expect(calculateIncreaseByYears(10)).toEqual(0.75)
      }
    )
    console.log(`3rd test`, Date())
    test(`age 7 returns a 0.45 = 45% increase`,
      () => {
        expect(calculateIncreaseByYears(7)).toEqual(0.45)
      }
    )
    console.log(`4th test`, Date())
    test(`age 1 returns a 0.05 = 5% increase`,
      () => {
        expect(calculateIncreaseByYears(1)).toEqual(0.05)
      }
    )   
  }
)