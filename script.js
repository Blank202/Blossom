const button = document.getElementById("dropPetalsBtn");

const colors = [
  "#ff43b6", // light pink
  "#ad2be0", // hot pink
  "#fa7373", // pastel pink
];

button.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    const petal = document.createElement("div");
    petal.classList.add("falling-petal");
    
    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    petal.style.background = `linear-gradient(to left, ${color} 55% , #1a233a)`;

    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.animationDuration = `${4 + Math.random() * 3}s`;
    petal.style.opacity = Math.random();

    document.querySelector(".flower").prepend(petal);
  }
});

const envelope = document.getElementById("openEnvelope");
const messageCard = document.getElementById("messageCard");

envelope.addEventListener("click", () => {
  messageCard.classList.toggle("show");
});
