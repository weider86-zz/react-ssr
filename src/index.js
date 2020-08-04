import "dotenv/config";
import cors from "cors";
import express from "express";

const userCredentials = {firstname: "Weider"};
const userDetails = {nationality: "Brazilian"};

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log("Frontend setup | node-express-base");

console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world in express");
});

app.get("/weider86", (req, res) => {
  res.send("weider86");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`)
);
