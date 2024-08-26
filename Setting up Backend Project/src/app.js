import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// for handling CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);

// for parsing application/json
app.use(
  express.json({
    limit: "30mb",
    extended: true,
  }),
);

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// for any assets like images, css, js
app.use(express.static("public"));

// for parsing cookies
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export default app;
