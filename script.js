window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector(".location-timezone");

    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com";
            const api = `${proxy}/https://api.darksky.net/forecast/b1f70db6725238c6a29e9dff6e830451/${lat},${long}`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, summary} = data.currently;
                //sets DOM elements from the API
                temperatureDegree.textContent = temperature;
            });
        });
    }
});