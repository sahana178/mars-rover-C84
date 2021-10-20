canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
images_array=["image 1.JPG","Image 2.jpg","Image 3.jpg","Image 4.jpg"];
var random_num = Math.floor(Math.random()*4)
rover_width = 100;
rover_height = 90;
rover_img = "rover.png";
marsbackground_img = images_array[random_num];
console.log("background image = " + marsbackground_img)
roverX = 10;
roverY = 10;

function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = marsbackground_img;

    Rover_image = new Image();
    Rover_image.onload = uploadRover;
    Rover_image.src = rover_img;


}

function uploadBackground() {
    ctx.drawImage(marsbackground_img, 0, 0, canvas.width, canvas.height);
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

function up(){
if(roverY>=0){
    roverY=roverY-10;
    console.log("when up arrow is pressed, X = " + roverX + " , Y = " + roverY);
    uploadBackground();
    uploadRover();
    
}
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("when down arrow is pressed, X = " + roverX + " , Y = " + roverY);
        uploadBackground();
        uploadRover();
        
    }
    }


    function left(){
        if(roverX>=0){
            roverX=roverX-10;
            console.log("when left arrow is pressed, X = " + roverX + " , Y = " + roverY);
            uploadBackground();
            uploadRover();
            
        }
        }

        function right(){
            if(roverX<=700){
                roverX=roverX+10;
                console.log("when right arrow is pressed, X = " + roverX + " , Y = " + roverY);
                uploadBackground();
                uploadRover();
                
            }
            }

        

