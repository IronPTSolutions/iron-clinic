const User = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.create = (req, res, next) => {
  res.render("users/new");
};

module.exports.doCreate = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then((hash) => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      phoneNumber: req.body.phoneNumber,
    })
      .then(() => {
        res.redirect("/login");
      })
      .catch(next);
  });
};

module.exports.login = (req, res, next) => {
  res.render("users/login");
};

module.exports.doLogin = (req, res, next) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password).then((match) => {
        if (match) {
          res.redirect("/patients"); // TODO: create session
        } else {
          res.redirect("/login"); // TODO: show error
        }
      });
    } else {
      res.redirect("/login"); // TODO: show error
    }
  });
};
