window.speechSynthesis.cancel();
const textarea = document.querySelector("textarea"),
  button = document.querySelector("button"),
  animationHTML = `
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
let isSpeaking = !0;

function text2Speech() {
  const e = window.speechSynthesis;
  var a, i = textarea.value;
  0 < i.length ? (!e.speaking && i && (a = new SpeechSynthesisUtterance(i), e.speak(a)), 50 < i.length ? isSpeaking = e.speaking && isSpeaking ? (button.innerText = "Pause", e.resume(), !1) : (button.innerText = "Resume", e.pause(), !0) : (isSpeaking = !1, button.innerHTML = animationHTML), setInterval(() => {
    e.speaking || isSpeaking || (isSpeaking = !0, button.innerText = "Convert to Speech")
  })) : alert("Please enter some text")
}