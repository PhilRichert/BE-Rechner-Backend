import "dotenv/config";
import express from "express";
import cors from "cors";

const server = express();
const port = 8080;

//use cors
server.use(cors());

server.use(express.json());

server.all("*", (req, res) => {
  res.send("Die URL ist ungültig");
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
