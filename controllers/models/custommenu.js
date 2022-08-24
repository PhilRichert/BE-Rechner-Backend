import mongoose from "mongoose";
import customdb from "./cumstomdbentry.js";

const customdbMenuSchema = new mongoose.Schema({
  name: String,
  zutat: [mongoose.SchemaTypes.ObjectId],
});

const custommenu = mongoose.model("Customdbmenu", customdbMenuSchema);

export default custommenu;
