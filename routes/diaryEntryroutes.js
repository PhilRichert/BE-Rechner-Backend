import express from "express";
import {
  create_new_entry,
  delete_entry,
  get_entry,
} from "../controllers/diaryEntryController.js";

const router = express.Router();

router.get("/add/:id", get_entry);
router.delete("/add/:id", delete_entry);
router.post("/add", create_new_entry);

export default router;
