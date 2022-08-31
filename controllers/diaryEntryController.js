import "dotenv/config";
import diaryEntry from "./models/diaryentry.js";

const create_new_entry = async (req, res) => {
  try {
    if (
      (req.body.name &&
        req.body.menge &&
        req.body.brennwert &&
        req.body.fett &&
        req.body.kohlenhydrate &&
        req.body.davonzucker &&
        req.body.protein &&
        req.body.ballaststoffe &&
        req.body.mahlzeit) !== (undefined || 0)
    ) {
      await diaryEntry.create({
        name: req.body.name,
        menge: req.body.menge,
        brennwert: req.body.brennwert,
        fett: req.body.fett,
        kohlenhydrate: req.body.kohlenhydrate,
        davonzucker: req.body.davonzucker,
        protein: req.body.protein,
        ballaststoffe: req.body.ballaststoffe,
        mahlzeit: req.body.mahlzeit,
      });
      res.send("New Entry created");
    }
  } catch (error) {
    console.log(error);
    res.send(`Fehler: ${error}`);
  }
};

const delete_entry = async (req, res) => {
  try {
    const menu = await diaryEntry.findById(req.params.id);
    await menu.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Menu is not found" });
  }
};

const get_entry = async (req, res) => {
  const Menu = await diaryEntry
    .findById(req.params.id)
    .populate({ path: "zutat", model: "diaryEntry" });
  res.json(Menu);
};

export { create_new_entry, delete_entry, get_entry };
