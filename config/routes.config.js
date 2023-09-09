const express = require("express");
const router = express.Router();
const patients = require("../controllers/patients.controller");
const users = require("../controllers/users.controller");
const secure = require("../middlewares/secure.middleware");
const upload = require("../config/multer.config");

// patients CRUD
router.get("/patients/new", secure.check, patients.create);
router.post(
  "/patients",
  secure.check,
  upload.single("patata"),
  patients.doCreate
);
router.get("/patients", secure.check, patients.list);
router.get("/patients/:id", secure.check, patients.detail);
router.get("/patients/:id/edit", secure.check, patients.edit);
router.post("/patients/:id", secure.check, patients.doEdit);
router.post("/patients/:id/delete", secure.check, patients.delete);

// users CRUD
router.get("/users/new", users.create);
router.post("/users", users.doCreate);
router.get("/login", users.login);
router.post("/login", users.doLogin);
router.post("/logout", secure.check, users.logout);

router.get("/", (req, res) => res.redirect("/patients"));

module.exports = router;
