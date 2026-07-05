const images = [
    "images/animal 1.jfif",
    "images/image2.jfif",
    "images/image3.jfif",
    "images/image4.jfif",
    "images/image5.jfif",
    "images/panada.jfif",
    "images/parrot.jfif",
    "images/download (1).jfif"
];

let current = 0;

// Lightbox Open
function openLightbox(index) {
    current = index;

    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[current];
}

// Lightbox Close
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Next & Previous Image
function changeImage(step) {

    current += step;

    if (current < 0) {
        current = images.length - 1;
    }

    if (current >= images.length) {
        current = 0;
    }

    document.getElementById("lightbox-img").src = images[current];
}

// Image Filter
function filterImages(category) {

    let items = document.querySelectorAll(".image");

    items.forEach(function (item) {

        if (category === "all") {
            item.style.display = "block";
        }

        else if (item.classList.contains(category)) {
            item.style.display = "block";
        }

        else {
            item.style.display = "none";
        }

    });

}

