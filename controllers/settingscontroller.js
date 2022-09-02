import futter from "../src/futter.json" assert { type: "json" };
import settings from "./models/settings";

const getsettings = (req) => {
    try {
        const all_settings = await settings.find({});
        res.send(all_settings);
      } catch (error) {
        res.send(error);
      }
};

const create_new_entry = async (req, res) => {
    try {
      if (
        (req.body.Faktor_morgens,
            req.body.Faktor_mittags,
            req.body.Faktor_abends,
            req.body.Faktor_nachts) !== (undefined)
      ) {
        await settings.create({
            Faktor_morgens: req.body.Faktor_morgens,
            Faktor_mittags: req.body.Faktor_mittags,
            Faktor_abends:req.body.Faktor_abends,
            Faktor_nachts: req.body.Faktor_nachts
        });
        res.send("New Setting created");
      }
    } catch (error) {
      console.log(error);
      res.send(`Fehler: ${error}`);
    }
  };

  const delete_setting = async (req, res) => {
    try {
      const menu = await settings.findById(req.params._id);
            await settings.remove();
      res.send({ data: true });
    } catch {
      res.status(404).send({ error: "Setting is not found" });
    }
  };

  const change_setting = async (req,res) => {
    try{
       await settings.findByIdAndUpdate({_id:req.params.id}, req.body,{new:true})
      await function(settings){
        res.send(settings)
       }
    }
    catch{
        res.status(404).send({ error: "Setting is not found" });
    }
  }


export { getsettings, create_new_entry, delete_setting,change_setting };
