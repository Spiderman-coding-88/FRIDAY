/*
========================================
WEATHER + LOCATION SYSTEM
========================================
*/

const weatherText =
    document.getElementById("weather");

const locationText =
    document.getElementById("location");

/* LOAD WEATHER */

async function loadWeather() {

    try {

        if(navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(

                async (position) => {

                    const lat =
                        position.coords.latitude;

                    const lon =
                        position.coords.longitude;

                    /* DISPLAY LOCATION */

                    locationText.innerText =
                        `${lat.toFixed(2)}, ${lon.toFixed(2)}`;

                    /*
                    ========================================
                    MOCK WEATHER SYSTEM
                    ========================================
                    */

                    const temp =
                        Math.floor(
                            20 + Math.random() * 15
                        );

                    const weatherStates = [

                        "Clear Sky",
                        "Cloudy",
                        "Light Rain",
                        "Storm Active",
                        "Sunny",
                        "Windy"
                    ];

                    const weather =
                        weatherStates[
                            Math.floor(
                                Math.random() *
                                weatherStates.length
                            )
                        ];

                    weatherText.innerText =
                        `${temp}°C | ${weather}`;
                },

                (error) => {

                    console.log(error);

                    weatherText.innerText =
                        "Weather unavailable";

                    locationText.innerText =
                        "Access denied";
                }

            );

        } else {

            weatherText.innerText =
                "Geolocation unsupported";
        }

    } catch(error) {

        console.log(error);

        weatherText.innerText =
            "Weather system failure";
    }
}

/* LOAD */

// loadWeather();

/* REFRESH */

// setInterval(loadWeather, 600000);