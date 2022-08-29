import "dotenv/config";
import express from "express";
import cors from "cors";
import ingridientroutes from "./routes/ingredientroutes.js";
import dbentryroutes from "./routes/dbentryroutes.js";
import dbmenuroutes from "./routes/dbmenuroutes.js";
import diaryEntryroutes from "./routes/diaryEntryroutes.js";
import bodyparser from "body-parser";

const server = express();
const port = 3000;
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

server.use(cors());
server.use(bodyparser.urlencoded({ extended: false }));
server.use(express.json());

server.use("/entrys", diaryEntryroutes);
server.use("/ingridients", ingridientroutes);
server.use("/newingridient", dbentryroutes);
server.use("/newmenu", dbmenuroutes);

server.all("*", (req, res) => {
  res.send("Die URL ist ungültig");
});

server.listen(process.env.PORT ?? port, () => {
  console.log(`Server läuft auf ${port}`);
});
