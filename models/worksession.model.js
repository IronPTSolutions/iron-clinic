const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    date: { type: Date },
    done: { type: Boolean },
    cost: { type: Number },
    paymentMethod: { type: String, enum: ["bizum", "cash", "card"] },
    group: { type: mongoose.Schema.Types.ObjectId },
    type: { type: String, enum: ["B1", "B5", "B10"] },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient" },
  },
  {
    timestamps: true,
  }
);

const WorkSession = mongoose.model("WorkSession", schema);

module.exports = WorkSession;
