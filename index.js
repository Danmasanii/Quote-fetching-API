fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {

            "x-rapidapi-key": "bb74f63843mshcfc531b8a409c1ep1b45cajsnad13d572703f",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"

        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = 'By  -' + response.originator.name;
    })
    .catch(err => {
        console.error(err);
    });