const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String },
    address: { type: String },
    phoneNumber: { type: String },
    description: { type: String },
    birth: { type: Date },
    email: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

schema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "patient",
  justOne: false,
});

const Patient = mongoose.model("Patient", schema);

module.exports = Patient;
