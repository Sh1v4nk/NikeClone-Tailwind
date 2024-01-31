const bigImage = document.getElementById("collection-image");
const cardImg1 = document.getElementById("thumbnail-1");
const cardImg2 = document.getElementById("thumbnail-2");
const cardImg3 = document.getElementById("thumbnail-3");

const dots = [];
const cursorMovement = {
  x: 0,
  y: 0,
};


cardImg1.addEventListener("click", function () {
  changeMainImage("./Assets/images/big-shoe1.png");
  updateBorderClass(cardImg1);
});

cardImg2.addEventListener("click", function () {
  changeMainImage("./Assets/images/big-shoe2.png");
  updateBorderClass(cardImg2);
});

cardImg3.addEventListener("click", function () {
  changeMainImage("./Assets/images/big-shoe3.png");
  updateBorderClass(cardImg3);
});

function changeMainImage(newSrc) {
  bigImage.src = newSrc;
}

function updateBorderClass(clickedImage) {
  cardImg1.classList.remove("border-solid");
  cardImg2.classList.remove("border-solid");
  cardImg3.classList.remove("border-solid");

  clickedImage.classList.add("border-solid");
}

// Cursor Trail Effect
for (let i = 0; i < 101; i++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  document.body.appendChild(dot);
  dots.push(dot);
}

document.addEventListener("mousemove", function (e) {
  cursorMovement.x = e.clientX;
  cursorMovement.y = e.clientY;
});

function animateDots() {
  let x = cursorMovement.x;
  let y = cursorMovement.y;

  dots.forEach((dot, index) => {
    const nextDot = dots[index + 1] || dots[0];
    x += (nextDot.offsetLeft - x) * 0.09;
    y += (nextDot.offsetTop - y) * 0.09;
    dot.style.left = x + "px";
    dot.style.top = y + "px";
  });
}

setInterval(animateDots, 15);
