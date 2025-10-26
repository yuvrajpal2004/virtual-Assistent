let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
let voice = document.querySelector("#voice")

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.voice = voice[5]
    text_speak.lang = "Hi-GB"


    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 & hours < 12) {
        speak('good morning')
    }
    else if (hours >= 12 & hours < 16) {
        speak('good afternoon ')
    } else { speak('good evening') }
}

window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new SpeechRecognition() // create object
recognition.onresult = (event) => {
    let rec = event.results[0][0].transcript;
    content.innerHTML = rec;
    takeCommand(rec.toLowerCase());
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello")|| message.includes("hey")) {
        speak('Hello sir , what can i help you ');
    } 
    else if (message.includes("who are you")) {
        speak('my name is rudra ,I am virtual assistent, created by Ambuj Sir')
    }
    else if (message.includes("open youtube")) {
        speak('opening youtube ...')
        window.open("https://youtube.com/", "_blank")
    }
     else if (message.includes("open facebook")) {
        speak('opening facebook ...')
        window.open("https://facebook.com/", "_blank")
    } 
    else if (message.includes("open instagram")) {
        speak('opening instagram ...')
        window.open("https://instagram.com/", "_blank")
    }
    else if (message.includes("open google")) {
        speak('opening google...')
        window.open("https://google.com/", "_blank")
    }
     else if (message.includes("open calculator")) {
        speak('opening calculator...')
        window.open("calculator://")
    } 
    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    } 
    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }
    else if (message.includes("ambuj")|| message.includes("ambush") ||message.includes("ambug") ||message.includes("ambus") ||message.includes("ambuge")) {
        speak("ambuj sir is my creator and i respect them..")
    }

     else if (message.includes("akash")) {
        speak("akash is younger brother of ambuj sir")
    }
    else {
        speak(`this is what i found on internet regarding ${message}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}

