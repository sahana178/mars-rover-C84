canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_img = "rover.png";
marsbackgroung_img = "mars.jpg";
roverX = 10;
roverY = 10;

function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = marsbackgroung_img;

    Rover_image = new Image();
    Rover_image.onload = uploadRover;
    Rover_image.src = rover_img;


}

function uploadBackground() {
    ctx.drawImage(marsbackgroung_img, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_img, roverX, roverY, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {

    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        console.log("up");
        up();
    }

    if (keypressed == '40') {
        console.log("down");
        down();
    }

    if (keypressed == '37') {
        console.log("left");
        left();
    }

    if (keypressed == '39') {
        console.log("right");
        right();
    }
}
