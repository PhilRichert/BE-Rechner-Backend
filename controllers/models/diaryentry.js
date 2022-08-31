import mongoose from "mongoose";
const { Schema } = mongoose;

const diaryEntrySchema = new mongoose.Schema({
  name: String,
  menge: Number,
  brennwert: Number,
  fett: Number,
  kohlenhydrate: Number,
  davonzucker: Number,
  protein: Number,
  ballaststoffe: Number,
  mahlzeit: String,
});

const diaryEntry = mongoose.model("diaryEntry", diaryEntrySchema);

export default diaryEntry;
