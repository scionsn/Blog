var express = require("express");
var cors = require("cors");
var app = express();
var bodyparser = require("body-parser");
const usersroute = require("./routes/users");
const logindetailsroute = require("./routes/logindetails");
const articledetailsroute = require("./routes/articledetails");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/users", usersroute);
app.use("/logindetails", logindetailsroute);
app.use("/articledetails", articledetailsroute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../build"));
}
var port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log("server started on", port);
});
