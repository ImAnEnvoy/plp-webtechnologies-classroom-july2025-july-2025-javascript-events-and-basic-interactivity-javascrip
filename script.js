// Feature 1: Toggle background color
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Feature 2: Click counter
let count = 0;
const countBtn = document.getElementById("countBtn");
const counterDisplay = document.getElementById("counter");

countBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});


// Custom Form Validation
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form submission until validation passes

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation checks
  if (username.length < 3) {
    message.textContent = "❌ Username must be at least 3 characters.";
    message.style.color = "red";
    return;
  }

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    message.textContent = "❌ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "❌ Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // If all checks pass
  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";
  form.reset();
});
