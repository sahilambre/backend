import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required,
  },
  salary: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  experienceInYears: {
    type: Number,
    required: true,
    default: 0,
  },
  worksAt: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  ],
});

export const Doctor = mongoose.model("Doctor", doctorSchema);
