var canvas= new fabric.Canvas('myCanvas')
player_x=10;
player_y=10;
block_image_height=30;
block_image_width=30;
player_object="";
block_image_object="";
function player_update(){
    fabric.Image.fromURL('player.png',function(Img){
        player_object=Img 
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x

        })
            
        canvas.add(player_object);
    })
}
function new_image(get_Image){
    fabric.Image.fromURL(get_Image,function(Img){
        block_image_object=Img 
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x

        })
            
        canvas.add(block_image_object);
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey==true&& key_pressed=='80'){
        console.log("Shift and p key pressed together")
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey==true&& key_pressed=='77'){
        console.log("Shift and m key pressed together")
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(key_pressed=='70'){
        new_image('ironman_face.png');
        console.log("f");
    }
    if(key_pressed=='66'){
        new_image('spiderman_body.png');
        console.log("b");
    }
    if(key_pressed=='76'){
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(key_pressed=='82'){
        new_image('thor_right_hand.png');
        console.log("r");
    }
    if(key_pressed=='67'){
        new_image('captain_america_left_hand.png');
        console.log("c");
    }
    if(key_pressed=='71'){
        new_image('player.png');
        console.log("g");
    }
}