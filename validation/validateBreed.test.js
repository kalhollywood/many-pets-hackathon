import {describe, test, expect} from "@jest/globals";

import { validateBreed } from "./validateBreed.js";

describe('check that validateBreed validates breeds correctly', 
  ()=> {
    console.log(`1st test`, Date())
    test(`non valid breed`,
      async () => {
        expect(await validateBreed(`dog`, `gsdgdh`)).toBe(false)
      }
    )
    console.log(`2nd test`, Date())
    test(`valid breed`,
      async () => {
        expect(await validateBreed(`dog`, `shih tzu`)).toBe(true)
    }
  )
  }
)