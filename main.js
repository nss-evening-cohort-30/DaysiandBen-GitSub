const cursor = document.getElementById("customCursor");

// Show the custom cursor and move it
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
  cursor.style.display = "block";
});

// Hide the custom cursor when mouse leaves the page
document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const peppermint = document.querySelectorAll(".peppermint");
  anime({
    targets: peppermint,
    translateX: function () {
      return anime.random(0, window.innerWidth);
    },
    translateY: function () {
      return anime.random(0, window.innerHeight);
    },
    opacity: [
      { value: 0.9, duration: 1000, delay: anime.stagger(2000) },
      { value: 0, duration: 1000, delay: anime.stagger(2000) },
    ],
    easing: "easeInOutQuad",
    duration: 10000, // Slowed down the movement
    loop: true,
  });
});
