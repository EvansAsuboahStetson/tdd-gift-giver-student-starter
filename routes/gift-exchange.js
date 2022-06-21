const express = require("express");
const router = express.Router();

const gift_exchange = require("../models/gift-exchange");

router.post("/traditional",async (req, res, next) => {
    try {
 const names = await gift_exchange.traditional(req.body.names);
    res.status(200).json(names);
  } catch (err) {
      next(err)
  }
});
router.post("/pairs", async (req, res, next) => {
    try{
  const names = await  gift_exchange.pairs(req.body.names);
    res.status(200).json(names);
  } catch (err) {
      next(err)
  }
});


module.exports = router;
