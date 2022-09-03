import {describe, test, expect} from "@jest/globals";

import {
  calculateIncreaseByArea,
  IncreasedAreas
} from './calculateIncreaseByArea.js'

describe('check that calculateIncreaseByArea correctly increases the quote for the postcodes specified', 
  ()=> {
    console.log(`1st test`, Date())
    IncreasedAreas.forEach((area) => 
      test(`this area returns the increase 0.15 = 15%`,
        () => {
          expect(calculateIncreaseByArea(area)).toEqual(0.15)
        }
      )
    ) 
  }
)