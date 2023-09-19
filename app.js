let sliderValue = document.getElementById("sliderThing");

sliderValue.oninput = function () {
  
   document.getElementsByClassName("container-displayA")[0].setAttribute("style", "");

  let sliderTime = "animation-duration: " + Number(this.value)/10 + "s;";
  let sliderTimeTick = "animation-duration: " + Number(this.value)/10 + "s;";
  
  let sliderDelay = "animation-delay: " + 0 + "s;";
  let sliderDelay2 = "animation-delay: " + (Number(this.value)/10)/2 + "s;";
  
 
  let styleReplaceBeginning = sliderTime + " " + sliderDelay;
  let styleReplaceEnd = sliderTime + " " + sliderDelay2;
  
  let tickStyle = "animation-timing-function: steps(14);" + " " + sliderTimeTick + " " + sliderDelay2;
  let tockStyle = "animation-timing-function: steps(14);" + " " +sliderTimeTick + " " + "animation-delay: " + (Number(this.value)/10)  + "s;"; 
  
  document.getElementsByClassName("beginning")[0].setAttribute("style", styleReplaceBeginning);
  document.getElementsByClassName("end")[0].setAttribute("style", styleReplaceEnd);
  
  
  document.getElementsByClassName("tick")[0].setAttribute("style", tickStyle);
  document.getElementsByClassName("tock")[0].setAttribute("style", tockStyle);
  
  
  document.getElementById("display-output1").innerHTML = ("J Ball: " + styleReplaceBeginning).replace(";", "").replace(";", "").toUpperCase();
  document.getElementById("display-output2").innerHTML = ("E Ball: " + styleReplaceEnd).replace(";", "").replace(";", "").toUpperCase();
  
  

/*var audioSampleVar = document.getElementById("audioSample");
  
  var x = Number(this.value)/10;
  
  audioSampleVar.playbackRate = 4-Math.pow(x,1.5)*1.20;
  console.log(4-Math.pow(x,2)*1.20);
  
  
  setTimeout(audioSampleVar.play(), 1000*(Number(this.value)/10/2));
 
  var soundID = "Thunder";
  function loadSound () {
    createjs.Sound.registerSound("assets/thunder.mp3", soundID);
  }
  function playSound () {
  createjs.Sound.play(soundID);
  }*/

}



  
function turboBoost() {
    document.getElementById("display-output1").innerHTML = ("J Ball: " + "DANGER DANGER DANGER DANGER");
  
  document.getElementById("display-output2").innerHTML = ("E Ball: " + "DANGER DANGER DANGER DANGER");
  
    document.getElementsByClassName("beginning")[0].setAttribute("style", "animation-duration: .1s; animation-delay: 0;");
  document.getElementsByClassName("end")[0].setAttribute("style", "animation-duration: .1s; animation-delay: .05s;");
 
  document.getElementsByClassName("tick")[0].setAttribute("style", "animation-duration: .1s; animation-delay: .1s;");
  document.getElementsByClassName("tock")[0].setAttribute("style", "animation-duration: .1s; animation-delay: .05s;");
  
  document.getElementsByClassName("container-displayA")[0].setAttribute("style", "animation: flashing .5s linear 0s infinite;");
}


  