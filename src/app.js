import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/api", (req, res) => {
  res.json({ data: "helloo" });
});

import userRouter from "./routes/user.routes.js";
import donorRouter from "./routes/donor.routes.js";
import communityRouter from "./routes/community.routes.js";
import chatRouter from "./routes/chat.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/donor", donorRouter);
app.use("/api/v1/community", communityRouter);
app.use("/api/v1/message", chatRouter);

export { app };
