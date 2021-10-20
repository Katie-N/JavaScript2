// Katie Nordberg
// 10/20/2021

let images = document.querySelectorAll("img");

function imageClicked (clickedImage) {
  document.getElementById("imageDescription").textContent = clickedImage.target.alt;
}

images.forEach((image) => {
  image.addEventListener("click", imageClicked);
});
