import mongoose from "mongoose";
const { Schema } = mongoose;

const settingsSchema = new mongoose.Schema({
  Faktor_morgens: Number,
  Faktor_mittags: Number,
  Faktor_abends: Number,
  Faktor_nachts: Number,

});

const settings = mongoose.model("settings", settingsSchema);

export default settings;