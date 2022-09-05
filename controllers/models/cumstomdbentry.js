import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const { Schema } = mongoose;

const customdbEntrySchema = new mongoose.Schema({
  id: Number,

  name: String,
  menge_in_g: Number,
  brennwert_kcal: Number,
  fett: Number,
  kohlenhydrate: Number,
  davon_zucker: Number,
  protein: Number,
  ballaststoffe: Number,
});

customdbEntrySchema.plugin(autoIncrement.plugin, {
  model: "Customdbentry",
  field: "id",
});
const customdb = mongoose.model("Customdbentry", customdbEntrySchema);

export default customdb;
