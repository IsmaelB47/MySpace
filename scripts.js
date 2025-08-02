// Toggle dropdown menu visibility & update ARIA attributes
function toggleMenu() {
  const menu = document.getElementById("menuDropdown");
  const button = document.getElementById("menuBtn");
  const isShown = menu.classList.contains("show");

  if (isShown) {
    menu.classList.remove("show");
    menu.setAttribute("aria-hidden", "true");
    button.setAttribute("aria-expanded", "false");
  } else {
    menu.classList.add("show");
    menu.setAttribute("aria-hidden", "false");
    button.setAttribute("aria-expanded", "true");
  }
}

// Close dropdown if clicking outside the button
window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropbtn")) {
    const dropdown = document.getElementById("menuDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
      dropdown.setAttribute("aria-hidden", "true");
      document.getElementById("menuBtn").setAttribute("aria-expanded", "false");
    }
  }
});

// Search form validation and demo alert
function search() {
  const input = document.getElementById("search-input");
  if (!input.value.trim()) {
    alert("Please enter a search term.");
    input.focus();
    return false; // Prevent form submission if empty
  }
  alert(`Searching for: ${input.value}`); // Placeholder for search functionality
  return false; // prevent actual form submission for demo
}

// Simple slider logic
let index = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 320}px)`;
  });
  index = (index + 1) % slides.length;
}, 4000);
