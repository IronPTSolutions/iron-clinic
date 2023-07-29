const User = require("../models/user.model");
const Patient = require("../models/patient.model");
const Comment = require("../models/comment.model");

module.exports.list = (req, res, next) => {
  // TODO: list patients that current user can access

  Patient.find()
    .populate("user")
    .then((patients) => {
      res.render("patients/list", { patients });
    })
    .catch(() => {});
};

module.exports.detail = (req, res, next) => {
  Patient.findById(req.params.id)
    .populate("user")
    .populate("comments")
    .then((patient) => {
      res.render("patients/detail", { patient });
    })
    .catch(next);
};

module.exports.create = (req, res, next) => {
  res.send("TODO: patients create");
};

module.exports.doCreate = (req, res, next) => {
  res.send("TODO: patients doCreate");
};

module.exports.edit = (req, res, next) => {
  res.send("TODO: patients edit");
};

module.exports.doEdit = (req, res, next) => {
  res.send("TODO: patients doEdit");
};

module.exports.delete = (req, res, next) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/patients");
    })
    .catch(next);
};
