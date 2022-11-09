const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.route("/").get((req, res) => {
  console.log("Called!");
  res.send({ data: "Testing complete!" });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
