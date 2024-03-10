import mongoose from "mongoose";

const DonorScema = new mongoose.Schema(
  {
    DonorDetails: {
      type: String,
      require: true,
    },
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

export const Donor = mongoose.model("Donor", DonorScema);
