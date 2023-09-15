/**
 * postgres database configuration
 * You need to provide the database URL, which includes details
 * like the host, port, database name, username, and password
 */

import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  connectionString: "postgres://postgres:postgrespw@localhost:32769",
  //   connectionString:
  //     "postgres://furniture_db_ctmh_user:YSRLMOD0mEANCjJd7LEFVHxykHWCp3jC@dpg-ck0qhvpjbtgs73ckf1pg-a.oregon-postgres.render.com/furniture_db_ctmh",
});

export default pool;
