import dotenv from "dotenv";
import express from "express";
import authRoute from "./routes/AUTH.route.js"; //make sure that .js in module type. idk why...?
import cartRoute from "./routes/cart.route.js";
import productsRoute from "./routes/products.route.js";
import sellerDeatilsRoute from "./routes/sellerDetails.route.js";

//using environment variables

dotenv.config();
const app = express();

//middlewares

app.use(express.json()); //future note : use body parser if api error in json parsing occurs
app.use("/api/auth", authRoute); // route to manage the  route
app.use("/api/products", productsRoute);
app.use("/api/sellerDetails", sellerDeatilsRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
