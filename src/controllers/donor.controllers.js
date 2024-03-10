import { ComDonor } from "../models/comDonor.model.js";
import { Donor } from "../models/donor.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const donorFood = asyncHandler(async (req, res) => {
  const { DonorDetails, items, address } = req.body;
  const data = await Donor.create({ DonorDetails, items, address });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data sent successfully"));
});
const comdonor = asyncHandler(async (req, res) => {
  const { items, address } = req.body;
  const data = await ComDonor.create({ items, address });
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data sent successfully"));
});

const getDonation = asyncHandler(async (req, res) => {
  const data = await Donor.find({});
  return res
    .status(200)
    .json(new ApiResponse(200, data, "data sent successfully"));
});

export { donorFood, getDonation, comdonor };
