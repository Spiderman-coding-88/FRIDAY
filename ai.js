/*
========================================
NOVA AI ENGINE
========================================
*/

class NovaAI {

    constructor() {

        this.memory = [];

        this.mode = "ASSIST";

        this.version = "1.0.0";

        this.active = true;
    }

    /* SAVE MEMORY */

    saveMemory(userInput, response) {

        this.memory.push({
            user: userInput,
            ai: response,
            time: new Date()
        });

        console.log("Memory Saved");
    }

    /* GENERATE RESPONSE */

    async generateResponse(prompt) {

        prompt = prompt.toLowerCase();

        /* BASIC AI */

        if(prompt.includes("who created you")) {

            return "I was created as an advanced futuristic artificial intelligence system.";
        }

        if(prompt.includes("how are you")) {

            return "All systems are functioning perfectly.";
        }

        if(prompt.includes("your mission")) {

            return "My mission is to assist and enhance user productivity.";
        }

        if(prompt.includes("activate combat mode")) {

            return "Combat mode unavailable. Safety protocols active.";
        }

        if(prompt.includes("what can you do")) {

            return "I can assist with voice commands, intelligent interactions, web searches, and system control.";
        }

        return "I am still learning. Please expand my intelligence systems.";
    }

}

/* INITIALIZE AI */

const novaAI = new NovaAI();

/* AI CHAT FUNCTION */

async function askNova(prompt) {

    const response =
        await novaAI.generateResponse(prompt);

    novaAI.saveMemory(prompt, response);

    speak(response);
}