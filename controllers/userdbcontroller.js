import "dotenv/config";
import mongoose from "mongoose";
import customdb from "./models/cumstomdbentry.js";
// import customdb from "./models/cumstomdbentry.js";

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
      (req.body.name &&
        req.body.menge_in_g &&
        req.body.brennwert_kcal &&
        req.body.fett &&
        req.body.kohlenhydrate &&
        req.body.davon_zucker &&
        req.body.protein &&
        req.body.ballaststoffe) !== (undefined || 0)
    ) {
      await customdb.create({
        name: req.body.name,
        menge_in_g: req.body.menge_in_g,
        brennwert_kcal: req.body.brennwert_kcal,
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

const get_custom_ingredients = async (req, res) => {
  res.send(futter);
};

const delete_ingridient = async (req, res) => {
  try {
    const ingridient = await customdb.findById(req.params.id);
    await ingridient.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Ingredient is not found" });
  }

  // const {id} = req.params
  // const deleted = customdb.find()
};

export { create_new_ingridient, delete_ingridient, get_custom_ingredients };
