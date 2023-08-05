const Comment = require("../models/comment.model");
const Patient = require("../models/patient.model");

module.exports.list = (req, res, next) => {
  Patient.find(req.user.admin ? {} : { user: req.user.id })
    .sort({ createdAt: -1 })
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
  res.render("patients/new");
};

module.exports.doCreate = (req, res, next) => {
  // Note: never trust the HTTP client, always whitelist your expected properties
  Patient.create({
    name: req.body.name,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    description: req.body.description,
    birth: req.body.birth,
    email: req.body.email,
    user: req.user.id,
  })
    .then(() => {
      res.redirect("/patients");
    })
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  Patient.findById(req.params.id)
    .then((patient) => {
      res.render("patients/edit", { patient });
    })
    .catch(next);
};

module.exports.doEdit = (req, res, next) => {
  // Note: never trust the HTTP client, always whitelist your expected properties
  Patient.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    description: req.body.description,
    birth: req.body.birth,
    email: req.body.email,
  })
    .then((patient) => {
      res.redirect(`/patients/${patient.id}`);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/patients");
    })
    .catch(next);
};
