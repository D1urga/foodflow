import { Router } from "express";
import {
  comdonor,
  donorFood,
  getDonation,
} from "../controllers/donor.controllers.js";

const router = Router();

router.route("/donate").post(donorFood);
router.route("/comdonate").post(comdonor);
router.route("/getDonation").get(getDonation);

export default router;
