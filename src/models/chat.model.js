import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

export const Chat = mongoose.model("Chat", ChatSchema);
