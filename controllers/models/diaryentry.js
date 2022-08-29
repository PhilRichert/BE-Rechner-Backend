import mongoose from "mongoose";
const { Schema } = mongoose;

const diaryEntrySchema = new mongoose.Schema({
  zutat: [{ type: Schema.Types.ObjectId, ref: "Customdbentry" }],

  mahlzeit: String,
  time: Date,
});

const diaryEntry = mongoose.model("diaryEntry", diaryEntrySchema);

export default diaryEntry;
