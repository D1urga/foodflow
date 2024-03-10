import mongoose from "mongoose";

const ComDonorSchema = new mongoose.Schema(
  {
    items: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export const ComDonor = mongoose.model("ComDonor", ComDonorSchema);
