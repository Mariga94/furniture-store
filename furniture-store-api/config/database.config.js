/**
 * postgres database configuration
 * You need to provide the database URL, which includes details
 * like the host, port, database name, username, and password
 */

import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  connectionString: "",

});

export default pool;
