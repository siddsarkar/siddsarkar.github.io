window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const ele = document.getElementById("root");
    ele.classList.remove("loading-screen");
  }, 500);
});
