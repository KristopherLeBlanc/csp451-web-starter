// src/services/authService.js

// Mock user record (in a real app this would come from a database)
const mockUser = {
    username: "admin",
    password: "password123"
};

/**
 * Validate that both username and password exist.
 * Returns an object describing validity and any errors.
 */
function validateCredentials(username, password) {
    const errors = [];

    if (!username || username.trim() === "") {
        errors.push("Username
