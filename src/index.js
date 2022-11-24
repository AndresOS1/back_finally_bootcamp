const express = require("express"); //import express con ESM
const morgan = require("morgan");
const app = express();
require("./config/connection"); //import the running database connection
require("dotenv").config();
const cors = require("cors"); //enable cors conecttion angular
app.use(cors());
//code convert a json
app.use(express.json());

app.use(morgan("dev"));

//listenig routres
app.use("/api", require("./router/routes_index"));

//create port
const PORT = process.env.PORT || 3003;
//running port
app.listen(PORT, (err) => {
  if (err) {
    console.log(`error server:${err}`);
  } else {
    console.log(`server running succesfull in port: ${PORT}`);
  }
});
