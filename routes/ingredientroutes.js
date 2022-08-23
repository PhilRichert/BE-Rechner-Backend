import express from "express";
import {
  food_all,
  //   food_id,
  food_id_info,
  food_name,
} from "../controllers/ingridientcontrollers.js";

const router = express.Router();

router.get("/:name/:info", food_id_info);

// router.get("/:id", food_id);
router.get("/:name", food_name);

router.get("/", food_all);

export default router;
