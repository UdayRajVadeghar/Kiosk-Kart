import dotenv from "dotenv";
import express from "express";
import loginRoute from "./routes/login.route.js"; //make sure that .js in module type. idk why...?

//using environment variables
dotenv.config();
const app = express();

//middlewares

app.use(express.json()); //use body parser if api error in json parsing occurs
app.use("/api/login", loginRoute); // route to manage the login route

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

export default app;
