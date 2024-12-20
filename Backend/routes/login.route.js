import express from "express";

const loginRoute = express.Router();

loginRoute.get("/", (req, res) => {
  res.send("APi route is working");
});

export default loginRoute;
