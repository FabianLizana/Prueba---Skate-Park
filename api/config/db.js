import dotenv from 'dotenv';
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;
const { DB_CONNECT_STRING } = process.env;

const config = {
  connectionString: DB_CONNECT_STRING,
  idleTimeoutMillis: 0,
  allowExitOnIdle: true,
};

const pool = new Pool(config);

export default pool;

