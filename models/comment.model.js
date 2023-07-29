const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    text: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", schema);

module.exports = Comment;
