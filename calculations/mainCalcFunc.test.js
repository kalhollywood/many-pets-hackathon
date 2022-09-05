import {describe, test, expect} from "@jest/globals";



describe('dummy test for now but write more asap', 
  ()=> {
    console.log(`1st test`, Date())
    test(`dummy test`,
      () => {
        expect(0).toEqual(0)
      }
    )
  }
)