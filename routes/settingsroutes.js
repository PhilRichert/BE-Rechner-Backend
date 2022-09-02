import express from "express";
import {
    getsettings, create_new_entry, delete_setting,change_setting
} from "../controllers/settingscontroller.js";

const router = express.Router();

router.get("/", getsettings);

// router.get("/:id", food_id);
router.delete("/:_id", delete_setting);

router.post("/", create_new_entry);

router.put("/:id",change_setting)

export default router;
