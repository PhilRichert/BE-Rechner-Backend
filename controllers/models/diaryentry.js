import mongoose from "mongoose";
const { Schema } = mongoose;

const diaryEntrySchema = new mongoose.Schema({
  zutat: [{ type: Schema.Types.ObjectId, ref: "Customdbentry" }],

  mahlzeit: varChar(255),
  time: Date,
});

const diaryEntry = mongoose.model("diaryEntry", diaryEntrySchema);

export default diaryEntry;
