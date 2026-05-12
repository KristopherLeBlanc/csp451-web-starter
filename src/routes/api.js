const express = require("express");

const router = express.Router();

/**
 * Starter endpoint to prove the API works.
 * Feature branch: feature/api-endpoints should expand this structure:
 * - add route modules, controllers, and validation
 * - add at least one POST endpoint
 */
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

module.exports = { router };

const db = require("../db");

router.get("/db/test", (req, res) => {
  try {
    const connection = db.connect();
    const result = db.query("SELECT * FROM example_table");

    res.json({
      connection,
      result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
