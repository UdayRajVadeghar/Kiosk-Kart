import express from "express";
import dbPool from "../DB/db.js";

const productsRoute = express.Router();

//Add a Product to the table
productsRoute.post("/", async (req, res) => {
  const { name, description, price, stock, image_url, seller_id, seller_name } =
    req.body;

  try {
    const productData = await dbPool.query(
      "INSERT INTO products (name , description , price , stock , image_url , seller_id , seller_name) VALUES ($1 , $2 , $3 , $4 , $5 , $6 , $7) RETURNING *",
      [name, description, price, stock, image_url, seller_id, seller_name]
    );

    res.status(201).send(productData.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//get all products
productsRoute.get("/", async (req, res) => {
  try {
    const productData = await dbPool.query("SELECT * FROM products");
    res.status(200).send(productData.rows[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//get the product by id
productsRoute.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const productData = await dbPool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );
    res.status(200).send(productData.rows[0]);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//Get the seller details by product id

productsRoute.get("/", (req, res) => {});

export default productsRoute;
