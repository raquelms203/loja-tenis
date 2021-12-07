let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let apiRoutes = require("./routes/routes");
let cors = require("cors");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

const PORT = process.env.port || 3000;

app.get("/", function (req, res) {
  res.send("Express running");
});

app.use(cors({ origin: "http://localhost:3001" }));

app.use("/api", apiRoutes);

app.listen(PORT, function () {
  console.log("Serve on port " + PORT);
});
