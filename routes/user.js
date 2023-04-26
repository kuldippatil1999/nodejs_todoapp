import express from "express";
import {
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/users/new", register);
router.post("/users/Login", login);

router.get("/users/logout", logout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
