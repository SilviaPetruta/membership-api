const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const registrationRoute = require("./routes/registration");
const transactionsRoute = require("./routes/transactions");

app.use(bodyParser.json());

app.use(registrationRoute);
app.use(transactionsRoute);

app.listen(3000);
