let speech = new SpeechSynthesisUtterance();

let voices=[];

let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices=window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i]) = new Option(voice.name, i))
};

voiceSelect.addEventListener("change", () =>{
    speech.voice = voices[voiceSelect.value];
});


document.querySelector("button").addEventListener("click", ()=>{
    speech.text= document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})



//code to switch themes between dark mode and light mode

document.getElementById("swap").addEventListener('click', function(){
    document.body.classList.toggle('light-mode');

    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('swap', 'light');
    } else{
        localStorage.setItem('swap', 'dark');
    }
});


//load the saved theme preference on page load
window.onload=function(){
    if(localStorage.getItem('swap')=== 'light'){
        document.body.classList.add('light-mode');
    }
}







// click_to_convert.addEventListener('click', function(){
//     var speech = true;
//     window.SpeechRecognition = window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.interimResults=true;

//     recognition.addEventListener('result', e=>{
//         const transcript = Array.from(e.results)
//         .map(result =>result[0])
//         .map(result => result.transcript)
//         convert_text.innerHTML = transcript;
//     })

//     if(speech == true){
//         recognition.start();
//     }
// })