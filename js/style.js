function styling(){

    let window_width = window.outerWidth;
    let window_height = window.outerHeight;

    if(window_height <= 568){
        let welcome_caption = document.getElementsByClassName("welcome-caption");
        let mask = document.getElementsByClassName("mask2");
        let section = document.getElementsByClassName("working-section");
        mask[0].style.height= "100vh";
        section[0].style.height ="100vh";
        welcome_caption[0].style.marginTop = "-85px";
        //welcome_caption[0].style.fontSize = "14pt";
    }
   
}

styling();