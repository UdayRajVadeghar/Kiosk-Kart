import express from "express";
import dbPool from "../DB/db.js"; // making sure it is .js

//initializing the router to use routes in the express
const authRoute = express.Router();

//POST request || "CREATE" in CRUD
authRoute.post("/", async (req, res) => {
  //database schema :- id(auto generated) , name(req), email(req), password(req),additionalInfo(JSONB type)

  //we are extracting json feilds from the info sent by the user
  const { name, email, password, role } = req.body;

  try {
    //pool.query(queryText, values, callback) ->> parameters
    const newUser = await dbPool.query(
      "INSERT INTO users (name , email , password , role) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, email, password, role]
    );
    res.status(200).send(newUser.rows[0]); //the info of the user is present in the first entry of rows
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//GET request , "READ" in CRUD
authRoute.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const userDetails = await dbPool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );
    res.status(200).send(userDetails.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//PUT request , "UPDATE" in CRUD
authRoute.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const updatedData = await dbPool.query(
      "UPDATE users SET name = $1 RETURNING *",
      [name]
    );
    res.status(201).send(updatedData.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//DELETE request , "DELETE" in CRUD
authRoute.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedUser = await dbPool.query("DELETE FROM users WHERE id = $1", [
      id,
    ]);
    res.status(201).send(`Deleted the user with id = ${id}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default authRoute;
