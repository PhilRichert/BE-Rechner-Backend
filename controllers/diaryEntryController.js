import "dotenv/config";
import diaryEntry from "./models/diaryentry.js";

const create_new_entry = async (req, res) => {
  try {
    if (
      (req.body.name &&
        req.body.zutat &&
        req.body.mahlzeit &&
        req.body.time) !== (undefined || 0)
    ) {
      await diaryEntry.create({
        name: req.body.name,
        zutat: req.body.zutat,
        mahlzeit: req.body.mahlzeit,
        time: req.body.time,
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
