import mongoose from "mongoose";

const { Schema } = mongoose;

const customdbEntrySchema = new mongoose.Schema({
  name: String,
  menge_in_g: Number,
  brennwert_kcal: Number,
  fett: Number,
  kohlenhydrate: Number,
  davon_zucker: Number,
  protein: Number,
  ballaststoffe: Number,
});

const customdb = mongoose.model("Customdbentry", customdbEntrySchema);

export default customdb;
