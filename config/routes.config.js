const express = require("express");
const router = express.Router();
const patients = require("../controllers/patients.controller");
const users = require("../controllers/users.controller");

// patients CRUD
router.get("/patients/new", patients.create);
router.post("/patients", patients.doCreate);
router.get("/patients", patients.list);
router.get("/patients/:id", patients.detail);
router.get("/patients/:id/edit", patients.edit);
router.post("/patients/:id", patients.doEdit);
router.post("/patients/:id/delete", patients.delete);

// users CRUD
router.get("/users/new", users.create);
router.post("/users", users.doCreate);
router.get("/login", users.login);
router.post("/login", users.doLogin);

router.get("/", (req, res) => res.redirect("/patients"));

module.exports = router;
