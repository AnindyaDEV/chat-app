import express from "express";
import { protectRoute } from "../middleware/auth.protectRoute.js";
import { getMessages,getusers, sendMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getusers);
router.get("/:id", protectRoute, getMessages);

router.post("/send/:id", protectRoute, sendMessages);

export default router;