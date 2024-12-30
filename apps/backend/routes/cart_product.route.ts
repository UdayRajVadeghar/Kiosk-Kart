import express from "express";
import dbPool from "../DB/db.js";

const cartProductRoute = express.Router();

//Carts - Cart_products updating the quantity of the product
cartProductRoute.put("/", async (req, res) => {
  const cartId = req.body.cart_id;
  const productId = req.body.product_id;
  const quantity = req.body.quantity;

  try {
    const cartDetails = await dbPool.query(
      "UPDATE cart_products SET quantity = $1 WHERE cart_id = $2 AND product_id = $3",
      [quantity, cartId, productId]
    );

    res.status(201).send("Success");
  } catch (error) {
    res.status(500).send(error);
  }
});

//next -> add the products in the cart

export default cartProductRoute;
