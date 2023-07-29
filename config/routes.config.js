const express = require("express");
const router = express.Router();
const patients = require("../controllers/patients.controller");

// TODO: complete patients CRUD routes
router.get("/patients", patients.list);

module.exports = router;
