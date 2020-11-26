const mongoose = require("mongoose");
const { Schema } = mongoose;

const classroomSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
      trim: true,
      // unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    active: {
      type: Boolean,
      default: true,
    },
    file: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  },
);

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
