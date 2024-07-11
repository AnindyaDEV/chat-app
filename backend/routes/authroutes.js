import express from 'express';
import { loginUser,logOutUser,SignUpUser } from '../controllers/auth.controller.js';
const router = express.Router();

router.post("/signUp",SignUpUser);
router.post("/login",loginUser);
router.post("/logout",logOutUser);

export default router;

