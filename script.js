const bigImage = document.getElementById("collection-image");
const cardImg1 = document.getElementById("thumbnail-1");
const cardImg2 = document.getElementById("thumbnail-2");
const cardImg3 = document.getElementById("thumbnail-3");

const dots = [];
let isMouseConnected = false;
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

// Check if the device supports touch
const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;

function createDots() {
  for (let i = 0; i < 101; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    document.body.appendChild(dot);
    dots.push(dot);
  }
}

if (isTouchDevice) {
  // Exit if it's a touch device
  console.log("Touch device detected. Exiting animation.");
} else {
  createDots();

  document.addEventListener("mouseenter", function () {
    isMouseConnected = true;
    createDots();
    animateDots();
  });

  document.addEventListener("mouseleave", function () {
    isMouseConnected = false;
    removeDots();
  });

  document.addEventListener("mousemove", function (e) {
    if (isMouseConnected) {
      cursorMovement.x = e.clientX;
      cursorMovement.y = e.clientY;
    }
  });

  function animateDots() {
    if (isMouseConnected) {
      let x = cursorMovement.x;
      let y = cursorMovement.y;

      dots.forEach((dot, index) => {
        const nextDot = dots[index + 1] || dots[0];
        x += (nextDot.offsetLeft - x) * 0.09;
        y += (nextDot.offsetTop - y) * 0.09;
        dot.style.left = x + "px";
        dot.style.top = y + "px";
      });

      requestAnimationFrame(animateDots);
    }
  }

  function removeDots() {
    dots.forEach((dot) => {
      document.body.removeChild(dot);
    });
    dots.length = 0;
  }

  animateDots();
}
