import express from "express";
import {
  create_new_ingridient,
  delete_ingridient,
  get_custom_ingredients,
} from "../controllers/userdbcontroller.js";

const router = express.Router();

router.get("/", get_custom_ingredients);
router.delete("/newentry/:id", delete_ingridient);
router.post("/newentry", create_new_ingridient);

export default router;
