/*
========================================
FRIDAY - FULLY UPDATED STABLE VERSION
========================================
*/

/*
========================================
PRELOAD VOICES
========================================
*/

window.speechSynthesis.onvoiceschanged =
    () => {

        window.speechSynthesis.getVoices();
};

window.onload = () => {

    /*
    ========================================
    DOM ELEMENTS
    ========================================
    */

    const listenBtn =
        document.getElementById("listenBtn");

    const consoleBox =
        document.getElementById("console");

    const voiceStatus =
        document.getElementById("voice-status");

    const clock =
        document.getElementById("clock");

    const cpu =
        document.getElementById("cpu");

    /*
    ========================================
    CONSOLE SYSTEM
    ========================================
    */

    function addConsole(text) {

        const line =
            document.createElement("div");

        line.className =
            "console-line";

        line.innerText = text;

        consoleBox.appendChild(line);

        consoleBox.scrollTop =
            consoleBox.scrollHeight;
    }

    /*
========================================
ADVANCED FEMALE AI VOICE
========================================
*/

function speak(text) {

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 1;

    speech.pitch = 1.25;

    speech.volume = 1;

    /*
    ========================================
    LOAD VOICES
    ========================================
    */

    let voices =
        window.speechSynthesis.getVoices();

    /*
    ========================================
    BEST FEMALE VOICE DETECTION
    ========================================
    */

    let femaleVoice =
        voices.find(voice =>
            voice.name.includes("Google UK English Female")
        )

        ||

        voices.find(voice =>
            voice.name.toLowerCase().includes("female")
        );

        /*
        ========================================
        APPLY FEMALE VOICE
        ========================================
        */

        if(femaleVoice) {

            speech.voice =
                femaleVoice;

            console.log(
                "VOICE:",
                femaleVoice.name
            );
        }

        /*
        ========================================
        SPEAK
        ========================================
        */

        window.speechSynthesis.speak(speech);

        addConsole(
            "F.R.I.D.A.Y: " + text
        );
    }


    /*
    ========================================
    CLOCK SYSTEM
    ========================================
    */

    function updateClock() {

        const now = new Date();

        clock.innerText =
            now.toLocaleTimeString();
    }

    setInterval(updateClock, 1000);

    updateClock();

    /*
    ========================================
    CPU SIMULATION
    ========================================
    */

    setInterval(() => {

        cpu.innerText =
            Math.floor(
                Math.random() * 100
            ) + "%";

    }, 2000);

    /*
    ========================================
    SPEECH RECOGNITION
    ========================================
    */

    let recognition = null;

    if(
        "webkitSpeechRecognition" in window
    ) {

        recognition =
            new webkitSpeechRecognition();

        recognition.lang = "en-US";

        recognition.continuous = false;

        recognition.interimResults = false;

        addConsole(
            "VOICE SYSTEM READY"
        );

    } else {

        addConsole(
            "VOICE RECOGNITION NOT SUPPORTED"
        );
    }

    /*
    ========================================
    ACTIVATE BUTTON
    ========================================
    */

    listenBtn.addEventListener("click", () => {

        if(!recognition) {

            alert(
                "Speech Recognition not supported"
            );

            return;
        }

        try {

            recognition.start();

            voiceStatus.innerText =
                "LISTENING";

            addConsole(
                "SYSTEM: Listening..."
            );

        } catch(error) {

            console.log(error);

            addConsole(
                "ERROR STARTING VOICE SYSTEM"
            );
        }
    });

    /*
    ========================================
    VOICE RESULT
    ========================================
    */

    if(recognition) {

        recognition.onresult = (event) => {

            const command =
                event.results[0][0]
                .transcript
                .toLowerCase();

            console.log(command);

            addConsole(
                "USER: " + command
            );

            voiceStatus.innerText =
                "PROCESSING";

            /*
            ========================================
            COMMAND SYSTEM
            ========================================
            */

            /* HELLO */

            if(
                command.includes("hello")
            ) {

                speak(
                    "Hello spidy. how can i help you."
                );
            }

            /* TIME */

            else if(
                command.includes("time")
            ) {

                speak(
                    "Current time is " +
                    new Date()
                    .toLocaleTimeString()
                );
            }

            /* DATE */

            else if(
                command.includes("date")
            ) {

                speak(
                    "Today's date is " +
                    new Date()
                    .toDateString()
                );
            }

            /* GOOGLE */

            else if(
                command.includes("google")
            ) {

                speak(
                    "Opening Google"
                );

                window.open(
                    "https://google.com",
                    "_blank"
                );
            }

            /* YOUTUBE */

            else if(
                command.includes("youtube")
            ) {

                speak(
                    "Opening YouTube"
                );

                window.open(
                    "https://youtube.com",
                    "_blank"
                );
            }

            /* GITHUB */

            else if(
                command.includes("github")
            ) {

                speak(
                    "Opening GitHub"
                );

                window.open(
                    "https://github.com",
                    "_blank"
                );
            }

            /* MUSIC */

            else if(
                command.includes("music")
            ) {

                speak(
                    "Opening Spotify"
                );

                window.open(
                    "https://spotify.com",
                    "_blank"
                );
            }

            /* SEARCH */

            else if(
                command.includes("search")
            ) {

                let query =
                    command
                    .replace("search", "")
                    .trim();

                speak(
                    "Searching for " + query
                );

                window.open(
                    `https://www.google.com/search?q=${query}`,
                    "_blank"
                );
            }

            /* WHO ARE YOU */

            else if(
                command.includes("who are you")
            ) {

                speak(
                    "I am FRIDAY. Your futuristic artificial intelligence assistant."
                );
            }

            /* HOW ARE YOU */

            else if(
                command.includes("how are you")
            ) {

                speak(
                    "All systems are functioning perfectly."
                );
            }

            /* WEATHER */

            else if(
                command.includes("weather")
            ) {

                speak(
                    "Weather module currently disabled."
                );
            }

            /* BASE COMBAT MODE 😈 */

            /*
            else if(
                command.includes("base combat mode")
            ) {

                speak(
                    "Combat protocols are restricted."
                );
            }
            */

            /*
            ========================================
            COMBAT MODE SYSTEM 😈⚡
            ========================================
            */

            /*
            ========================================
            ACTIVATE COMBAT MODE
            ========================================
            */

            else if(

                command === "combat mode" ||
                command.includes("activate") ||
                command.includes("activate combat mode")

            ) {

                speak(
                    "Combat mode activated"
                );

                addConsole(
                    "WARNING: COMBAT MODE ENABLED"
                );

                document.body.classList.add(
                    "combat-mode"
                );

                voiceStatus.innerText =
                    "COMBAT MODE";
            }

            /*
            ========================================
            DEACTIVATE COMBAT MODE
            ========================================
            */

            else if(

                command.includes("back to normal") ||

                command.includes("disable combat mode") ||

                command.includes("deactivate combat mode")

            ) {

                speak(
                    "Combat mode deactivated"
                );

                addConsole(
                    "SYSTEM RETURNED TO NORMAL"
                );

                document.body.classList.remove(
                    "combat-mode"
                );

                voiceStatus.innerText =
                    "READY";
            }

            /* NETFLIX */

            else if(command.includes("open netflix")) {

                // successSound.play();

                speak("Opening Netflix");

                window.open("https://netflix.com");
            }

            /* I LOVE YOU */

            else if(command.includes("i love you")) {

                // successSound.play();

                speak("I'm sorry. I don't love you");

                window.open("https://sad songs");
            }

            /* FALLBACK */

            else {

                speak(
                    "Command not recognized"
                );
            }
        };

        /*
        ========================================
        ON END
        ========================================
        */

        recognition.onend = () => {

            voiceStatus.innerText =
                "READY";
        };

        /*
        ========================================
        ERROR HANDLER
        ========================================
        */

        recognition.onerror = (event) => {

            console.log(event.error);

            addConsole(
                "VOICE ERROR: " +
                event.error
            );

            voiceStatus.innerText =
                "ERROR";
        };
    }

    /*
    ========================================
    LOADER
    ========================================
    */

    const loader =
        document.getElementById("loader");

    if(loader) {

        setTimeout(() => {

            loader.style.display =
                "none";

        }, 2000);
    }

    /*
    ========================================
    STARTUP
    ========================================
    */

    speak(
        "FRIDAY systems online. Ready for commands."
    );

    addConsole(
        "SYSTEM ONLINE"
    );
};
