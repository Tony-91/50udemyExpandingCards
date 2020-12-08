// Define equation and its parts
// panels = all elements with panel class
const panels = document.querySelectorAll(".panel");

// "on each click... removeActiveClass + add classList('active')"
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// defining what 'removeActive Class', by using a function.
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
