import bcrypt from "bcrypt";
import express from "express";
import dbPool from "../DB/db.js";

const loginRoute = express.Router();

loginRoute.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userdetails = await dbPool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    const userPassword = userdetails.rows[0].password_hash;

    const isPasswordCorrect = await bcrypt.compare(password, userPassword);

    if (!isPasswordCorrect) {
      res.status(401).send("User credentials are invalid");
      return;
    }

    //Here we should user jwt authentication.

    res.status(201).send("This user is authorized");
  } catch (error) {
    res.status(500).send("Error in login route");
  }
});

export default loginRoute;
