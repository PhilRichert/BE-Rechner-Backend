import mongoose from "mongoose";

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

export default mongoose.model("Customdbentry", customdbEntrySchema);
