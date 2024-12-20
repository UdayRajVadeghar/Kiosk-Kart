import express from "express";
import authPool from "../DB/db.js"; // making sure it is .js

//initializing the router to use routes in the express
const authRoute = express.Router();

//post request || "CREATE" in CRUD

authRoute.post("/", async (req, res) => {
  //database schema :- id(auto generated) , name(req), email(req), password(req),additionalInfo(JSONB type)

  //we are extracting json feilds from the info sent by the user
  const { name, email, password, additionalInfo } = req.body;

  res.send(additionalInfo);

  try {
    //pool.query(queryText, values, callback) ->> parameters
    const newUser = await authPool.query(
      "INSERT INTO users (name , email , password , addtionalInfo) VALUES ($,$2,$3,$4)",
      [name, email, password, additionalInfo]
    );
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default authRoute;
