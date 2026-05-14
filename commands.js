function processCommand(command) {

    /* HELLO */

    if(
        command.includes("hello")
    ) {

        speak(
            "Hello spidy. how can i help you."
        );
    }

    /* YOUTUBE */

    else if(
        command.includes("open youtube")
    ) {

        // successSound.play();

        speak(
            "Opening YouTube"
        );

        window.open(
            "https://youtube.com"
        );
    }

    /* GOOGLE */

    else if(
        command.includes("open google")
    ) {

        // successSound.play();

        speak(
            "Opening Google"
        );

        window.open(
            "https://google.com"
        );
    }

    /* GITHUB */

    else if(
        command.includes("open github")
    ) {

        // successSound.play();

        speak(
            "Opening GitHub"
        );

        window.open(
            "https://github.com"
        );
    }

    /* TIME */

    else if(
        command.includes("time")
    ) {

        // successSound.play();

        const time =
            new Date()
            .toLocaleTimeString();

        speak(
            "Current time is " + time
        );
    }

    /* DATE */

    else if(
        command.includes("date")
    ) {

        // successSound.play();

        const date =
            new Date()
            .toDateString();

        speak(
            "Today is " + date
        );
    }

    /* SEARCH */

    else if(
        command.includes("search for")
    ) {

        // successSound.play();

        const query =
            command.replace(
                "search for",
                ""
            );

        speak(
            "Searching for " + query
        );

        window.open(
            `https://www.google.com/search?q=${query}`
        );
    }

    /* MUSIC */

    else if(
        command.includes("play music")
    ) {

        // successSound.play();

        speak(
            "Opening Spotify"
        );

        window.open(
            "https://spotify.com"
        );
    }

    /* AI */

    else if(
        command.includes("who are you")
    ) {

        // successSound.play();

        speak(
            "I am F.R.I.D.A.Y. Your futuristic artificial intelligence assistant."
        );
    }

    /* NETFLIX */

    else if(command.includes("open netflix")) {

        // successSound.play();

        speak("Opening Netflix");

        window.open("https://netflix.com");
    }

    /*
    ========================================
    COMBAT MODE 😈⚡
    ========================================
    */

    else if(
        command.includes("activate")
        // command.includes("activate combat mode")
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

        /*
        ========================================
        SCREEN FLASH
        ========================================
        */

        document.body.style.transition =
            "0.2s";

        /*
        ========================================
        OPTIONAL AUTO EXIT
        ========================================
        */

        setTimeout(() => {

            speak(
                "Combat systems online"
            );

        }, 1500);
    }

    /*
    ========================================
    EXIT COMBAT MODE
    ========================================
    */

    else if(
        command.includes("deactivate")
        // command.includes("deactivate combat")
    ) {

        speak(
            "Returning to standard mode"
        );

        document.body.classList.remove(
            "combat-mode"
        );

        addConsole(
            "SYSTEM NORMALIZED"
        );
    }

    /* AI CHAT */

    else {

        // errorSound.play();

        askNova(command);
    }
}