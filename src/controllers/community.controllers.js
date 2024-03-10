import { Community } from "../models/community.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const postCommunity = asyncHandler(async (req, res) => {
  const { CommunityType, name, address, description } = req.body;
  const data = await Community.create({
    CommunityType,
    name,
    address,
    description,
  });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data sent successfully"));
});

export { postCommunity };
