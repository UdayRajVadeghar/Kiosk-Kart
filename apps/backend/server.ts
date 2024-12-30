import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import cartRoute from "./routes/cart.route";
import authRoute from "./routes/auth.route"
import cartProductRoute from "./routes/cart-product.route";
import loginRoute from "./routes/login.route";
import productsRoute from "./routes/products.route";
import sellerDeatilsRoute from "./routes/seller-details.route";

//using environment variables

dotenv.config();
const app = express();

//middlewares
app.use(cors()); // cors is enabled for everythign rn , should change it in the future
app.use(express.json()); //future note : use body parser if api error in json parsing occurs
app.use("/api/auth", authRoute); // route to manage the auth
app.use("/api/products", productsRoute);
app.use("/api/sellerDetails", sellerDeatilsRoute);
app.use("/api/carts", cartRoute);
app.use("/api/cartProduct", cartProductRoute);
app.use("/api/login", loginRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
