const images = document.querySelectorAll(".slide");
const backArrow = document.getElementById("back-arrow");
const forwardArrow = document.getElementById("forward-arrow");

let currentImage = 0;

forwardArrow.addEventListener("click", function () {
        if (currentImage === images.length - 1) {
            return;
        }
        
        currentImage++;
     
        hideOpenImage();
        showImage();
        showOrHideArrows();
    });

backArrow.addEventListener("click", function () {
        if (currentImage === 0 ) {
            return;
        }
        
        currentImage--;

        hideOpenImage();
        showImage();
        showOrHideArrows();
    });

function showImage() {
    images[currentImage].classList.add("show");
}

function hideOpenImage() {
    const openImage = document.querySelector(".show");
    openImage.classList.remove("show");
}

function showOrHideArrows(){
    const noFirstImage = currentImage !== 0;
    if(noFirstImage) {
     backArrow.classList.remove("opacity");
    } else {
        backArrow.classList.add("opacity");
    }

    const lastImage = currentImage !== 0 && currentImage === images.length - 1;
    if (lastImage) {
        forwardArrow.classList.add("opacity");
    } else {
        forwardArrow.classList.remove("opacity");
    }
}