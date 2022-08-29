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
const corsOptions = {
  origin: "http://localhost:" + (process.env.PORT || 3000),
  //          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  //          whatever origin (protocol://full.domain.name:port) calling the server
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions));
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
