const express = require("express");

const router = express.Router();

router.post("/topUp", (req, res, next) => {
  const data = req.body;
  console.log("🚀 ~ file: transactions.js:7 ~ router.post ~ data", data);

  res.status(200).send(data);
});

router.post("/pay", (req, res, next) => {
  const data = req.body;
  console.log("🚀 ~ file: transactions.js:14 ~ router.post ~ data", data);

  res.status(200).send(data);
});

module.exports = router;
