const express = require("express");
const morgan = require("morgan");
const hbs = require("hbs");
const app = express();

/** Connect to database **/
require("./config/db.config");

/** logger */
app.use(morgan("dev"));

/** Configure view engine **/
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
hbs.registerPartials(__dirname + "/views/partials");

/** Support req.body **/
app.use(express.urlencoded({ extended: true }));

/** Congiure static files */
app.use(express.static("public"));

/** Routes */
const router = require("./config/routes.config");
app.use(router);

app.listen(3000, () => {
  console.log("Ready!");
});
