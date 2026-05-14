/*
========================================
CINEMATIC ANIMATIONS
========================================
*/

const coreWrapper =
    document.querySelector(".core-wrapper");

const rings =
    document.querySelectorAll(".ring");

/* MOUSE PARALLAX */

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 35;

    const y =
        (window.innerHeight / 2 - e.pageY) / 35;

    coreWrapper.style.transform =
        `
        rotateY(${x}deg)
        rotateX(${y}deg)
        `;
});

/* RANDOM CORE PULSE */

setInterval(() => {

    const core =
        document.querySelector(".core");

    core.style.boxShadow =
        `
        0 0 20px #ff0000,
        0 0 ${40 + Math.random() * 40}px #ff0000,
        0 0 ${70 + Math.random() * 50}px #ff0000
        `;

}, 800);

/* RANDOM RING SPEED */

setInterval(() => {

    rings.forEach((ring) => {

        const speed =
            10 + Math.random() * 8;

        ring.style.animationDuration =
            `${speed}s`;

    });

}, 5000);

/* AI SCAN EFFECT */

function scanEffect() {

    const overlay =
        document.querySelector(".overlay");

    overlay.animate([

        {
            opacity: 0.3
        },

        {
            opacity: 0.1
        },

        {
            opacity: 0.3
        }

    ], {

        duration: 2000,

        iterations: 1

    });
}

/* RUN SCAN */

setInterval(scanEffect, 4000);

/* BUTTON GLOW */

const listenBtn =
    document.getElementById("listenBtn");

listenBtn.addEventListener("mouseenter", () => {

    listenBtn.style.boxShadow =
        "0 0 40px #ff0000";
});

listenBtn.addEventListener("mouseleave", () => {

    listenBtn.style.boxShadow =
        "0 0 20px #ff0000";
});