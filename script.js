document.addEventListener('DOMContentLoaded',()=>{
    const dino=document.querySelector(".dinasour");
    document.addEventListener("keyup",control);

    //adding the control function for both space & up-arrow key
    function control(e){
        if(e.keyCode == '38' || e.keyCode == '32'){
            jump()
        }
    }

    function jump(){
        let position=0
        let timerID=setInterval(()=>{
            //move down
            if(position === 150){
                clearInterval(timerID)
                position -=30;
                dino.style.bottom=position+'px'
            }
            //move up
            position +=30
            dino.style.bottom=position + 'px';
        },20)
        
        
    }
})