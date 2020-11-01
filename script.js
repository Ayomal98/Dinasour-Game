document.addEventListener("DOMContentLoaded", () => {
  const dino = document.querySelector(".dinasour");
  document.addEventListener("keyup", control);
  let isJump = false;
  let gravity = 0.9;
  //adding the control function for both space & up-arrow key
  function control(e) {
    if (e.keyCode == "38" || e.keyCode == "32") {
      if (!isJump) {
        isJump = true;
        jump();
      }
    }
  }
  let position = 0;
  function jump() {
    let count = 0;
    let timerID = setInterval(() => {
      //move down
      if (count === 10) {
        clearInterval(timerID);
        let downTimer = setInterval(function () {
          if (count === 0) {
            clearInterval(downTimer);
            isJump = false;
            console.log(position);
          }
          count--;
          position -= 8;
          position = position * gravity;
          dino.style.bottom = position + "px";
        }, 30);
      }
      //move up
      count++;
      position += 30;
      position = position * gravity;
      dino.style.bottom = position + "px";
    }, 30);
  }
});
