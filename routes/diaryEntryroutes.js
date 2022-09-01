import express from "express";
import {
  create_new_entry,
  delete_entry,
  get_one_entry,
  get_all_entrys,
} from "../controllers/diaryEntryController.js";

const router = express.Router();

router.get("/add/:id", get_one_entry);
router.get("/add/", get_all_entrys);
router.delete("/add/:id", delete_entry);
router.post("/add", create_new_entry);

export default router;
