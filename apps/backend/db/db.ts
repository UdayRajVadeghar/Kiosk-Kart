import Pg from "pg";

const { Pool } = Pg;

// the setup for the database , imp info. Dont get this wrong
const dbPool = new Pool({
  user: "uday",
  host: "localhost",
  database: "ecommerceDB",
  password: "password",
  port: 5432,
});

export default dbPool;
