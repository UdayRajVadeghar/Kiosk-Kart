import express from "express";
import dbPool from "../DB/db.js";

const sellerDeatilsRoute = express.Router();

//Getting the seller details by id
sellerDeatilsRoute.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const sellerDeatils = await dbPool.query(
      "SELECT * FROM users WHERE id = $1 AND role = 'seller' ",
      [id]
    );

    res.status(200).send(sellerDeatils.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//Getting details of all the sellers
sellerDeatilsRoute.get("/", async (req, res) => {
  try {
    const allSellerDetails = await dbPool.query(
      "SELECT * FROM users where role = 'seller'"
    );
    res.status(200).send(allSellerDetails.rows);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default sellerDeatilsRoute;
