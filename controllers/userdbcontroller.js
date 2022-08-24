import "dotenv/config";
import mongoose from "mongoose";
import Customdbentry from "./models/cumstomdbentry.js";

mongoose.connect(process.env.MONGO_URL, {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PASS,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

const create_new_ingridient = async (req, res) => {
  try {
    if (
      (name &&
        menge_in_g &&
        Brennwert_kcal &&
        fett &&
        kohlenhydrate &&
        davon_zucker &&
        protein &&
        ballaststoffe) !== (undefined || 0)
    ) {
      await Customdbentry.create({
        name: req.body.name,
        menge_in_g: req.body.menge_in_g,
        Brennwert_kcal: req.body.Brennwert_kcal,
        fett: req.body.fett,
        kohlenhydrate: req.body.kohlenhydrate,
        davon_zucker: req.body.davon_zucker,
        protein: req.body.protein,
        ballaststoffe: req.body.ballaststoffe,
      });
      res.send("New User created");
    }
  } catch (error) {
    res.send(`Fehler: ${error}`);
  }
};

export { create_new_ingridient };
