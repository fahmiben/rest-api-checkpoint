const express = require('express');

const app = express();
const port = 5000;

const DBconnect = require("./DBconnect");
DBconnect();

app.use(express.json());



// Routes -------------------------------
app.use("/person", require("./routes/person"));

// create server on port 5000 ------------

app.listen(port, (error) => {
  error ? console.log(error) : console.log("server is running");
});