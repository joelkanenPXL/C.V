const photo = document.getElementById("joel");

photo.addEventListener("mousedown", function() {
    photo.classList.add("clicked");
});

photo.addEventListener("mouseup", function() {
    photo.classList.remove("clicked");
});

photo.addEventListener("mouseleave", function() {
    photo.classList.remove("clicked"); // for if you drag the picture to remove the border.
});