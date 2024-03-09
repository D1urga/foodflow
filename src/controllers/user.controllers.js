import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;
  if (
    [fullName, email, password, username].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields required");
  }
  const existedUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existedUser) {
    throw new ApiError(409, "user already exits");
  }
  //   const avatarLocalPath = req.files?.avatar[0]?.path;
  //   const coverImageLocalPath = req.files?.coverImage[0]?.path;
  //   if (!avatarLocalPath) {
  //     throw new ApiError(400, "avatar is required");
  //   }
  //   const avatar = await uploadOnCloudinary(avatarLocalPath);
  //   const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  //   if (!avatar) {
  //     throw new ApiError(400, "avatar file is required");
  //   }
  const user = await User.create({
    fullName,
    avatar: "",
    coverImage: "",
    email,
    password,
    username: username.toLowerCase(),
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );
  if (!createdUser) {
    throw new ApiError(500, "something went wrong while registering");
  }
  res
    .status(201)
    .json(new ApiResponse(200, createdUser, "user registered successfully"));
});

export { registerUser };
