//dropdown menu responsive code
function dropDownMenu() {
  var x = document.getElementById("dropDownClick");
  if (x.className === "topnav") {
    x.className += " responsive";
    // change topnav to topnav-responsive##
  } else {
    x.className = "topnav";
  }
}

// // Web Speech API


// text to speech

const textarea = document.getElementById("text"),
voiceList = document.querySelector("select"),
speechBtn = document.getElementById("play-button");

let synth = speechSynthesis,
isSpeaking = true;

voices();

function voices(){
    for(let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend", option);
    }
}

synth.addEventListener("voiceschanged", voices);

function textToSpeech(text){
    let utterance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utterance.voice = voice;
        }
    }
    synth.speak(utterance);
}

speechBtn.addEventListener("click", e =>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            textToSpeech(textarea.value);
        }
        if(textarea.value.length > 80){
            setInterval(()=>{
                if(!synth.speaking && !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerText = "Convert To Speech";
                }else{
                }
            }, 500);
            if(isSpeaking){
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            }
        }else{
            speechBtn.innerText = "Convert To Speech";
        }
    }
});





// Speech/Voice To Text

var convert_text= document.getElementById('convert_text');
var click_to_convert= document.getElementById('click_to_convert');

click_to_convert.addEventListener('click', function(){
    var speech = true;
   
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults=true;
recognition.maxResults= 100;
console.log(speech);
    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
        .map(result =>result[0])
        .map(result => result.transcript)
        convert_text.innerHTML = transcript;
    })

    if(speech == true){
        recognition.start();
    }
});


