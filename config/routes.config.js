const express = require("express");
const router = express.Router();
const patients = require("../controllers/patients.controller");

// patients CRUD
router.get("/patients/new", patients.create);
router.post("/patients", patients.doCreate);
router.get("/patients", patients.list);
router.get("/patients/:id", patients.detail);
router.get("/patients/:id/edit", patients.edit);
router.post("/patients/:id", patients.doEdit);
router.post("/patients/:id/delete", patients.delete);

module.exports = router;
