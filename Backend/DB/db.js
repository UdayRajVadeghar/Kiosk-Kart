import pkg from "pg";

const { Pool } = pkg;

//the setup for the database , imp info. Dont get this wrong
const authPool = new Pool({
  user: "uday",
  host: "localhost",
  database: "ecommerceDB",
  password: "password",
  port: 5432,
});

export default authPool;
