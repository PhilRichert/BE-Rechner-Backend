import futter from "../src/futter.json" assert { type: "json" };
import faktor_settings from "./models/settings.js";

const getsettings = async (req, res) => {
  try {
    const all_settings = await faktor_settings.find({});
    res.send(all_settings);
  } catch (error) {
    res.send(error);
  }
};

const create_new_entry = async (req, res) => {
  let all_settings = await faktor_settings.find({});
  try {
    if (
      (req.body.Faktor_morgens,
      req.body.Faktor_mittags,
      req.body.Faktor_abends,
      req.body.Faktor_nachts) !== undefined &&
      all_settings == false
    ) {
      await faktor_settings.create({
        Faktor_morgens: req.body.Faktor_morgens,
        Faktor_mittags: req.body.Faktor_mittags,
        Faktor_abends: req.body.Faktor_abends,
        Faktor_nachts: req.body.Faktor_nachts,
      });
      res.send("New Setting created");
    } else if ((await faktor_settings.find({})) == true) {
      try {
        await faktor_settings.findByIdAndUpdate(
          { _id: faktor_settings._id },
          req.body,
          {
            new: true,
          }
        );
        await function (faktor_settings) {
          res.send(faktor_settings);
        };
      } catch {
        res.status(404).send({ error: "Setting is not found" });
      }
    }
  } catch (error) {
    console.log(error);
    res.send(`Fehler: ${error}`);
  }
};

const delete_setting = async (req, res) => {
  try {
    const menu = await faktor_settings.findById(req.params._id);
    await faktor_settings.remove();
    res.send({ data: true });
  } catch {
    res.status(404).send({ error: "Setting is not found" });
  }
};

const change_setting = (req, res) => {
  faktor_settings.findOneAndUpdate(
    { id: 1 },
    {
      $set: {
        Faktor_morgens: req.body.Faktor_morgens,
        Faktor_mittags: req.body.Faktor_mittags,
        Faktor_abends: req.body.Faktor_abends,
        Faktor_nachts: req.body.Faktor_nachts,
      },
    },

    {
      new: true,
    },
    (err, data) => {
      if (err) {
      } else {
        if (data == null) {
          res.send("nichts gefunden");
        } else {
          res.send(data);
        }
      }
    }
  );
};

export { getsettings, create_new_entry, delete_setting, change_setting };
