import express from "express";
import dbPool from "../DB/db.js";

const cartRoute = express.Router();

//creating a cart
cartRoute.post("/", async (req, res) => {
  const userId = req.body.id;
  try {
    const cartDetails = await dbPool.query(
      "INSERT INTO carts (user_id) VALUES ($1)",
      [userId]
    );

    res.status(200).send(cartDetails.rows);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default cartRoute;
