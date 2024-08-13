import dotenv from "dotenv";

import mongoose from "mongoose";

import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error in app.js", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!", error);
  });

// ! creating database connection in index.js using ()()
// * ()() is an IIFE (Immediately Invoked Function Expression) that is used to create a function and immediately execute it.
// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/DB_NAME`);
//     app.on("error", () => {
//       console.log("Err", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR" + error);
//     throw error;
//   }
// })();
