const mongoose = require("mongoose");
require("../config/db.config");

const User = require("../models/user.model");

mongoose.connection
  .dropDatabase()
  .then(() => {
    User.create({
      name: "Admin",
      email: "admin@example.com",
      password: "12345678",
      phoneNumber: "+34615341624",
      admin: true,
    })
      .then((user) => {
        console.log("Admin user created");
      })
      .catch(console.error);
  })
  .catch(console.error);
