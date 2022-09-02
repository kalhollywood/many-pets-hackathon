import express from "express";
import { buildQuoteForArray } from "../calculations/mainCalcFunc";
const router = express.Router();

/* GET quotes listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

// POST quotes listing
router.post("/", async (req, res) => {
  const pets = req.body.payload;
  try {
    res.status(201).json({success: true, payload: buildQuoteForArray(pets)});
  } catch (err) {
    res.status(400).json({success: false, message: err.message });
  }
});

export default router;
