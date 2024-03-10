import { Chat } from "../models/chat.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postChat = asyncHandler(async (req, res) => {
  const { owner } = req.params;
  const { message } = req.body;
  const data = await Chat.create({ owner, message });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data sent succesfully"));
});

const getAllChat = asyncHandler(async (req, res) => {
  const data = await Chat.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data sent suxxessfully"));
});

export { postChat, getAllChat };
