import mongoose from "mongoose";
import customdb from "./cumstomdbentry";

const customdbMenuSchema = new mongoose.Schema({
  name: String,
  zutat: [customdb],
});

const custommenu = mongoose.model("Customdbmenu", customdbMenuSchema);

export default custommenu;
