function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let welcome_caption = document.getElementsByClassName("welcome-caption");
        let mask = document.getElementsByClassName("mask2");
        let section = document.getElementsByClassName("working-section");
        mask[0].style.height= "120vh";
        section[0].style.height ="120vh";
        welcome_caption[0].style.marginTop = "-85px";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}

function reviews(){
    let reviews = document.getElementsByClassName("reviews");
    let buttons = document.getElementsByClassName("rounds");
    let count = 0;

    buttons[count].onclick = function(){
        reviews[count].style.display = "block";
        reviews[count+1].style.display = "none";
        reviews[count+2].style.display = "none";
    }

    buttons[count+1].onclick = function(){
        reviews[count].style.display = "none";
        reviews[count+1].style.display = "block";
        reviews[count+2].style.display = "none";
    }

    buttons[count+2].onclick = function(){
        reviews[count].style.display = "none";
        reviews[count+1].style.display = "none";
        reviews[count+2].style.display = "block";
    }
}

reviews();
styling();