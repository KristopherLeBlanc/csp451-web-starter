const express = require("express");
const router = express.Router();

// HEALTH ENDPOINT (moved from old api.js)
router.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// DB TEST ENDPOINT (moved from old api.js)
const db = require("../../db");

router.get("/db/test", (req, res) => {
  try {
    const connection = db.connect();
    const result = db.query("SELECT * FROM example_table");

    res.json({ connection, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Import users routes (Step 4)
const usersRoutes = require("./users");
router.use("/users", usersRoutes);

module.exports = router;
