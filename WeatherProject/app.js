const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser"); 

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    const city = req.body.cityName;
    const apiKey = "77eb79786345c76777d8f0f001679001";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit;
    
    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            var temperature = weatherData.main.temp;
            var description = weatherData.weather[0].description;
            var icon = weatherData.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //console.log(weatherData);
            console.log(temperature);
            console.log(description);
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in " + city + " is " + temperature + " degrees Celcius.</h1> ");
            res.write("<img src=" + iconUrl +   "></img>");
            res.send();
        });
    });
});

/*
    const city = "Antalya";
    
*/

app.listen(3000, function() {
    console.log("Server is running on port 3000!");
});