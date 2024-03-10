import { Router } from "express";
import { getAllChat, postChat } from "../controllers/chat.controller.js";

const router = Router();

router.route("/chat/:owner").post(postChat);
router.route("/getallchat").get(getAllChat);

export default router;
