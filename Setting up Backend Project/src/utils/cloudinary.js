import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; //fs is a core Node.js module that provides a way of working with the file system.

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    //upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded on cloudinary successfully
    console.log("file is uploaded on cloudinary successfully", response.url);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // delete file from local storage if it is not uploaded on cloudinary
    return null;
  }
};

export { uploadOnCloudinary };
