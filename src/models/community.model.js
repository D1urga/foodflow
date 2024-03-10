import mongoose from "mongoose";

const CommunitySchema = new mongoose.Schema(
  {
    CommunityType: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export const Community = mongoose.model("Community", CommunitySchema);
