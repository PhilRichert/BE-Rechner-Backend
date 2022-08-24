import express from "express";
import { create_new_menu, delete_menu } from "../controllers/custommenu.js";

const router = express.Router();

router.get;
router.delete("/newmenu/:id", delete_menu);
router.post("/newmenu", create_new_menu);

export default router;
