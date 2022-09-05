import express from "express";
const router = express.Router();

import {buildQuoteForArray} from '../calculations/mainCalcFunc.js'

// console.log(buildQuoteForArray)

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log(`Hi`)
  res.json({ message: "I wish we had some information to give you ☹️" });
});

export default router;

router.post("/", async function (req, res) {
  const pets = await req.body;
  console.log(pets)
  const quote = buildQuoteForArray(pets)
  console.log(buildQuoteForArray(pets))
  try {
    res.status(201).json({success: true, payload: `£${quote}`});
  } catch (err) {
    res.status(400).json({success: false, message: err.message });
  }
});

