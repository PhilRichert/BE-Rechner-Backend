import mongoose from "mongoose";
const { Schema } = mongoose;

const faktor_settingsSchema = new mongoose.Schema({
  Faktor_morgens: Number,
  Faktor_mittags: Number,
  Faktor_abends: Number,
  Faktor_nachts: Number,

});

const faktor_settings = mongoose.model("faktor_settings_settings", faktor_settingsSchema);

export default faktor_settings;