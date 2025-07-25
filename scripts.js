document.querySelector(".dropbtn").addEventListener("click", function () {
  document.getElementById("menuDropdown").classList.toggle("show");
});

window.addEventListener("click", function (e) {
  if (!e.target.matches(".dropbtn")) {
    const dropdown = document.getElementById("menuDropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
});

function search() {
  const value = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();
  if (value) {
    const found = document.body.innerText.toLowerCase().includes(value);
    alert(found ? "Match found for: " + value : "No matches found.");
  } else {
    alert("Please enter a search term.");
  }
}

// Simple Slider
let index = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - index) * 320}px)`;
  });
  index = (index + 1) % slides.length;
}, 4000);
