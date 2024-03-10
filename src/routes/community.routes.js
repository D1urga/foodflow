import { Router } from "express";
import { postCommunity } from "../controllers/community.controllers.js";

const router = Router();

router.route("/join").post(postCommunity);

export default router;
