import "dotenv/config";
import custommenu from "./models/custommenu.js";

const create_new_menu = async (req, res) => {
  try {
    if ((req.body.name && req.body.zutat) !== (undefined || 0)) {
      await custommenu.create({
        name: req.body.name,
        zutat: req.body.zutat,
      });
      res.send("New Menu created");
    }
  } catch (error) {
    console.log(error);
    res.send(`Fehler: ${error}`);
  }
};

const delete_menu = async (req, res) => {
  try {
    const menu = await custommenu.findById(req.params.id);
    await menu.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Menu is not found" });
  }
};

const get_menu = async (req, res) => {
  const Menu = await custommenu
    .findById(req.params.id)
    .populate({ path: "zutat", model: "Customdbentry" });
  res.json(Menu);
};

export { create_new_menu, delete_menu, get_menu };
