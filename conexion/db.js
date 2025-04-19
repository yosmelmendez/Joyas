import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
});

pool
  .connect()
  .then(() => {
    console.log("Conexion exitosa a PostgreSQL");
  })
  .catch((err) => console.error("Error de conexion"));

export default pool;
