import express from "express";
import { create_new_ingridient } from "../controllers/userdbcontroller.js";

const router = express.Router();

router.post("/newentry", create_new_ingridient);

export default router;
