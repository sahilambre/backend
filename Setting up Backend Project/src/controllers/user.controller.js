import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "ok" });
  // Get user detail from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return response

  const { username, fullName, email, password } = req.body;
  console.log("Email", email);

  // if (fullName === "") {
  //   throw new ApiError(400, "Full name is required");
  // }

  if ([fullName, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  User.findOne({
    $or: [{ email }, { username }],
  }).exec((err, user) => {});
});

export { registerUser };
