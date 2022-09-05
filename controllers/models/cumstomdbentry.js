import mongoose from "mongoose";
const { Schema } = mongoose;
// const autoIncrement = require("mongoose-auto-increment");

const customdbEntrySchema = new mongoose.Schema({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: String,
  menge_in_g: Number,
  brennwert_kcal: Number,
  fett: Number,
  kohlenhydrate: Number,
  davon_zucker: Number,
  protein: Number,
  ballaststoffe: Number,
});
/*
customdbEntrySchema.plugin(autoIncrement.plugin, {
  model: "Customdbentry",
  field: "id",
});*/
const customdb = mongoose.model("Customdbentry", customdbEntrySchema);

export default customdb;
