const express = require("express");
const { validateCredentials, authenticate } = require("../services/authService");

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
router.post("/auth/login", (req, res) => {
  const { username, password } = req.body;

  // Validate input
  const validation = validateCredentials(username, password);

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  // Authenticate user
  const isAuthenticated = authenticate(username, password);

  if (!isAuthenticated) {
    return res.status(401).json({
      success: false,
      message: "Invalid username or password"
    });
  }

  // Success
  return res.json({
    success: true,
    message: "Login successful"
  });
});

module.exports = { router };
