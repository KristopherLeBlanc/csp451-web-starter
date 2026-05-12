/**
 * Database module (starter stub).
 *
 * Feature branch: feature/database-connection should implement:
 * - connect()
 * - a config pattern using environment variables
 * - a simple query function OR a client getter
 *
 * You may use:
 * - a "fake" in-memory database for the checkpoint, OR
 * - SQLite, OR
 * - MongoDB/Postgres (optional) — keep setup simple
 */

require("dotenv").config();

// Load DB config from environment variables
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  name: process.env.DB_NAME
};
function connect() {
  if (!config.host || !config.user || !config.name) {
    throw new Error("Database configuration is incomplete.");
  }

  console.log("Connecting to database...");
  console.log(`Host: ${config.host}`);
  console.log(`User: ${config.user}`);
  console.log(`Database: ${config.name}`);

  // Simulated connection object
  return {
    connected: true,
    driver: "in-memory",
    timestamp: new Date().toISOString()
  };
}

function query(sql, params = []) {
  if (!sql || typeof sql !== "string") {
    throw new Error("Query must be a SQL string.");
  }

  console.log("Executing query:", sql);
  console.log("With params:", params);

  // Fake result set
  return {
    rows: [
      { id: 1, name: "Example Row" },
      { id: 2, name: "Another Row" }
    ],
    rowCount: 2
  };
}
module.exports = {
  config,
  connect,
  query
};
