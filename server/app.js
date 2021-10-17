var dotenv = require("dotenv")
var express = require("express");
var cors = require("cors");
var app = express();
var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

dotenv.config()

var port = process.env.PORT || 8080;

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.JWKSURI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: [process.env.ALGORITHMS],
});

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/unprotected", function (req, res) {
  res.send("It works");
});

app.use(jwtCheck);

app.get("/protected", function (req, res) {
  res.send("Secured Resource");
});

console.log("server listening on port: ", port)
app.listen(port);
