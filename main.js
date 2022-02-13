var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function load() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();
}

function speak(){
    synth = window.speechSynthesis;
    speak_data = document.getElementById("textbox").value;
    utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:95
});