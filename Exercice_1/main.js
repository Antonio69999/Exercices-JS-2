// let img_change = document.getElementById('image1');

// img_change.addEventListener('mouseover', image_changer);

function hover(img) {
    img.src = "./images/image1_2.jpg";  //FONCTION HOVER QUI CHANGE L'IMAGE 1 PAR LA 2 ON HOVER
}

function hoverOut(img) {
    img.src = "./images/image1.jpg";  //FONCTION HOVEROUT QUI REMET L'IMAGE 2 PAR LA 1 UNE FOI LE HOVER TERMINE
}