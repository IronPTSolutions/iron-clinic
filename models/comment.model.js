const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    text: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    workSession: { type: mongoose.Schema.Types.ObjectId, ref: "WorkSession" },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", schema);

module.exports = Comment;
