const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.route("/").get((req, res) => {
  console.log("Called!");
  res.send({ data: "Testing complete!" });
});

app.listen(port, function () {
  console.log("Server started");
});
