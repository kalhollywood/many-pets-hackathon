import {describe, test, expect} from "@jest/globals";

import { isPostcodeValidated } from "./validatePostcode.js";


describe('check that isPostcodeValidated validates postcodes correctly when passed a series of object to simulate the response from the API', 
  ()=> {
    console.log(`1st test`, Date())
    test(`invalid search response`,
      async () => {
        expect(isPostcodeValidated({
          status: 404,
          error: "Invalid postcode"
          })
        ).toBe(false)
      }
    )
    console.log(`2nd test`, Date())
    test(`valid search response`,
      async () => {
        expect(isPostcodeValidated({
          status: 200,
          result: {foo: `bar`}
          })
        ).toBe(true)
    }
  )
  }
)