const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
    admin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);

module.exports = User;
