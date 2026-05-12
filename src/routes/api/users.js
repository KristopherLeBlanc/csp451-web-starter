const express = require("express");
const router = express.Router();

function validateUser(data) {
  const errors = [];

  if (!data.name || data.name.trim() === "") {
    errors.push("Name is required");
  }

  if (!data.email || !data.email.includes("@")) {
    errors.push("Valid email is required");
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

router.post("/", (req, res) => {
  const validation = validateUser(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      success: false,
      errors: validation.errors
    });
  }

  const newUser = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email
  };

  res.json({
    success: true,
    user: newUser
  });
});

module.exports = router;
