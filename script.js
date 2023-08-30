const textarea=document.querySelector("textarea");
const button=document.querySelector("button");
const animationHTML = `
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
`;
let isSpeaking=true;
function text2Speech(){
        const synth = window.speechSynthesis;
        const text = textarea.value;
        if (!synth.speaking && text) {
          const utternace = new SpeechSynthesisUtterance(text);
          synth.speak(utternace);
        }
        if (text.length > 50) {
          if (synth.speaking && isSpeaking) {
            button.innerText = "Pause";
            synth.resume();
            isSpeaking = false;
          } else {
            button.innerText = "Resume";
            synth.pause();
            isSpeaking = true;
          }
        } else {
          isSpeaking = false;
          button.innerHTML=animationHTML;
        }
        setInterval(() => {
          if (!synth.speaking && !isSpeaking) {
            isSpeaking = true;
            button.innerText = "Convert to Speech";
          }
        });
}

