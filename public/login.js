/**
 * Starter login behavior (minimal).
 * Feature branch: feature/user-authentication should add:
 * - better validation (inline errors)
 * - UI feedback states (loading, success, failure)
 * - optional: call an API endpoint (e.g., POST /api/auth/login)
 */
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");
function showError(text) {
  message.textContent = text;
  message.style.color = "red";
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearMessage();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Frontend validation
  if (!username) {
    return showError("Username is required.");
  }

  if (!password) {
    return showError("Password is required.");
  }

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (!data.success) {
      return showError(data.message || data.errors?.join(", "));
    }

    message.style.color = "green";
    message.textContent = "Login successful!";
    // Optional redirect:
    // window.location.href = "/dashboard.html";

  } catch (err) {
    showError("Network error. Please try again.");
  }
});

