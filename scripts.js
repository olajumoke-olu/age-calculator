document.addEventListener("DOMContentLoaded", function () {
  const calculateAgeButton = document.getElementById("calculate-age");
  const result = document.getElementById("result");
  const animationContainer = document.getElementById("animation-container");
  const themeToggle = document.getElementById("theme-toggle");

  // Check local storage for theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.checked = true;
  }

  themeToggle.addEventListener("change", function () {
    if (themeToggle.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });

  calculateAgeButton.addEventListener("click", function () {
    const birthdateInput = document.getElementById("birthdate").value;
    if (!birthdateInput) {
      result.textContent = "Please enter your birthdate.";
      return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthdate.getDate())
    ) {
      age--;
    }
    let resultText;
    if (age < 0) {
      resultText = "You havent been born silly lol";
    } else {
      resultText = `You are ${age} years old.`;
    }

    result.textContent = resultText;

    triggerAnimation();
  });

  function triggerAnimation() {
    const container = document.getElementById("animation-container");
    container.style.display = "block";

    // Create background animation effect
    container.innerHTML = `
          <div class="animation-background"></div>
      `;

    // Remove animations after they finish
    setTimeout(() => {
      container.style.display = "none";
      container.innerHTML = ""; // Clear the animations
    }, 2000); // Duration should match the animation duration
  }
});
