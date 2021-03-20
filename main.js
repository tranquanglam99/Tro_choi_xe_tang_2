var toaDo = document.getElementById("tank");
var valueLeft = parseInt(toaDo.style["left"]);
var valueTop = parseInt(toaDo.style["top"]);

document.addEventListener("keydown", key => {
    
    if ((valueLeft > 114 && valueLeft < 152) && (valueTop > 76 && valueTop < 114)) {
        document.getElementById("tank").style["backgroundImage"] = "url('explosion.png')";
        document.getElementById("tank1").style["backgroundImage"] = "url('explosion.png')";
        document.getElementById("battleFiled").style["background"] = "black";
        document.getElementById("demo").style["backgroundImage"] = "url('gameover.jpg')";
    } else {
        switch(key.keyCode) {
            case 37:
                valueLeft --;
                if (valueLeft <= 0) {
                    valueLeft = 0;
                    toaDo.style["left"] = "0px";
                } else {
                    toaDo.style["left"] = valueLeft + "px";
                    toaDo.style["transform"] = "rotate(-90deg)";
                }
                
                break;
    
            case 38:
                valueTop --;
                if (valueTop <= 0) {
                    valueTop = 0;
                    toaDo.style["top"] = "0px";
                } else {
                    toaDo.style["top"] = valueTop + "px";
                    toaDo.style["transform"] = "rotate(0deg)";
                }
                break;
    
            case 39:
                valueLeft ++;
                if (valueLeft >= 171) {
                    valueLeft = 171;
                    toaDo.style["left"] = "171px";
                } else {
                    toaDo.style["left"] = valueLeft + "px";
                    toaDo.style["transform"] = "rotate(90deg)";
                }
                break;
            
            case 40:
                valueTop ++;
                if (valueTop >= 171) {
                    valueTop = 171;
                    toaDo.style["top"] = "171px";
                } else {
                    toaDo.style["top"] = valueTop + "px";
                    toaDo.style["transform"] = "rotate(180deg)";
                }
                
                break;      
    
        }
    }

})