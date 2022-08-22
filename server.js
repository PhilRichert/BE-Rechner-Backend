import "dotenv/config";
import express from "express";

const server = express();
const port = 8080;

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
