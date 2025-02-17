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

  gsap.to(".profImg", { duration: 2, rotation: 360 });

  // GSAP animation for footer elements
  gsap.from("footer p", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 1,
    ease: "power1.out",
  });

  gsap.from("#search-bar", {
    opacity: 0,
    x: 40,
    stagger: 0.1,
    duration: 1,
    ease: "power1.in",
    border: "1px solid #ff63ca",
  });
});

document.getElementById("music-btn").addEventListener("click", function () {
  const iframe = document.getElementById("adventure-music");
  iframe.classList.toggle("hide");
});
