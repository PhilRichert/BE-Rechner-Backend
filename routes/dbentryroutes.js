import express from "express";
import {
  create_new_ingridient,
  delete_ingridient,
} from "../controllers/userdbcontroller.js";

const router = express.Router();

router.delete("/newentry/:id", delete_ingridient);
router.post("/newentry", create_new_ingridient);

export default router;
