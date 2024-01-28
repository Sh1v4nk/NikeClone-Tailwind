const bigImage = document.getElementById("collection-image");
const cardImg1 = document.getElementById("thumbnail-1");
const cardImg2 = document.getElementById("thumbnail-2");
const cardImg3 = document.getElementById("thumbnail-3");

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
