const express = require("express");

const router = express.Router();

router.get("/isRegistered/:cardId", (req, res, next) => {
  const cardId = req.params.cardId;

  console.log("🚀 ~ file: registration.js:7 ~ router.get ~ cardId", cardId);

  res.status(200).send({ name: "Fake name" });
});

router.post("/register", (req, res, next) => {
  const data = req.body;
  console.log("🚀 ~ file: registration.js:15 ~ router.post ~ data", data);

  res.status(200).send(data);
});

module.exports = router;
