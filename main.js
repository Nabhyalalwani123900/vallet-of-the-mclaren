canvas = document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
carWidth = 75
carHeight = 100

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var carX = 5
var carY = 225

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
    ctx.drawImage(greencar_imgTag, carX, carY, carWidth, carHeight) //Define function ‘uploadgreencar’.


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }


}

function up() {
    if (carY >= 0) {
        carY = carY - 10;
        console.log("when up arrow is pressed, x =" + carX + " | y = " + carY);
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    if (carY <= 300) {
        carY = carY + 10;
        console.log("when down arrow is pressed, x =" + carX + " | y = " + carY);
        uploadBackground();
        uploadgreencar();
    }
}

function left() {
    if (carX >= 0) {
        carX = carX - 10;
        console.log("when left arrow is pressed, x =" + carX + " | y = " + carY);
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    if (carX <= 700) {
        carX = carX + 10;
        console.log("when right arrow is pressed, x =" + carX + " | y = " + carY);
        uploadBackground();
        uploadgreencar();
    }
}
