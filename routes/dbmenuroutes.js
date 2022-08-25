import express from "express";
import {
  create_new_menu,
  delete_menu,
  get_menu,
} from "../controllers/dbmenucontroller.js";

const router = express.Router();

router.get("/add/:id", get_menu);
router.delete("/add/:id", delete_menu);
router.post("/add", create_new_menu);

export default router;
