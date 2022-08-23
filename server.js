import "dotenv/config";
import express from "express";
import cors from "cors";
import ingridientroutes from "./routes/ingredientroutes.js";

const server = express();
const port = 8080;

//use cors
server.use(cors());

server.use(express.json());

// use Router for /pokemon
// server.use("/pokemon", pokemonRoutes);

// use Router for /game
server.use("/ingridients", ingridientroutes);

server.all("*", (req, res) => {
  res.send("Die URL ist ungültig");
});

server.listen(process.env.PORT ?? port, () => {
  console.log(`Server läuft auf ${port}`);
});
