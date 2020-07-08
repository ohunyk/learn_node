var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.listen(3000, function () {
  console.log("Start, express server on port 3000");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.post("/email_post", function (req, res) {
  //  res.send(req.body.email);
  res.render("email.pug", { email: req.body.email });
});
