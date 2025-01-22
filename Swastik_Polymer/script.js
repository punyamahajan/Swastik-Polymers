const carouselImages = document.querySelector('.carousel-images');
const images = Array.from(carouselImages.children);
const imageWidth = images[0].offsetWidth + 20;
let currentOffset = 0;

function moveImages() {
    currentOffset =currentOffset-2; 
    if (Math.abs(currentOffset) >= imageWidth) {
        const firstImage = images.shift();
        carouselImages.appendChild(firstImage);
        currentOffset += imageWidth;
        images.push(firstImage);
    }
    carouselImages.style.transform = `translateX(${currentOffset}px)`;
    requestAnimationFrame(moveImages); 
}
moveImages();
