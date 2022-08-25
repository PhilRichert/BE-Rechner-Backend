import mongoose from "mongoose";
import customdb from "./cumstomdbentry.js";
const { Schema } = mongoose;

const customdbMenuSchema = new mongoose.Schema({
  name: String,
  zutat: [{ type: Schema.Types.ObjectId, ref: "Customdbentry" }],
});

const custommenu = mongoose.model("Customdbmenu", customdbMenuSchema);

export default custommenu;
