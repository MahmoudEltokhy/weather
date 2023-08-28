
/// <reference types="../@types/jquery" />



var data = []; 
let response;
let Https;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let date = new Date();
day = weekday[date.getDay()];
let nextDay;
let thirdDay;
let searchCity = "cairo";

const searchInput = document.getElementById("locationInput");

async function getData(){

Https = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d35a4eb7ff2448bbbdb210615231408&q=${searchCity}&days=3`);
response = await Https.json();
console.log(response);

displayTodayCard();
displayTomorrowCard();
displayAfterTomorrowCard();

}


getData();


function displayTodayCard(){
    
    let todayDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentMonth2 = month[date.getMonth()];

    document.getElementById("today-name").innerHTML =  day;
    document.getElementById("month-name").innerHTML =  todayDate +" "+ currentMonth2;
    document.getElementById("location").innerHTML = response.location.name;
    document.getElementById("today-degree").innerHTML = response.current.temp_c + "°C" ;
    document.getElementById("current-img").setAttribute("src" , `${response.current.condition.icon}`);
    document.getElementById("description").innerHTML = response.current.condition.text;
    document.getElementById("humidity").innerHTML = response.current.humidity + "%" + " ";
    document.getElementById("wind").innerHTML = " " + response.current.wind_kph + "km/h" + " ";
    document.getElementById("direction").innerHTML = response.current.wind_dir;
}



function displayTomorrowCard(){

    switch (day) {
        case "Sunday":
            nextDay = "Monday"
            break;

            case "Monday":
            nextDay = "Tuesday"
            break;


            case "Tuesday":
            nextDay = "Wednesday"
            break;


            case "Wednesday":
            nextDay = "Thursday"
            break;


            case "Thursday":
            nextDay = "Friday"
            break;

            case "Friday":
            nextDay = "Saturday"
            break;

            case "Saturday":
            nextDay = "Sunday"
            break;
    
        default:
        break;
    }


document.getElementById("next-day").innerHTML = nextDay;
document.getElementById("next-img").setAttribute("src" , `${response.forecast.forecastday[1].day.condition.icon}`);
document.getElementById("max-temp1").innerHTML = response.forecast.forecastday[1].day.maxtemp_c ;
document.getElementById("min-temp1").innerHTML = response.forecast.forecastday[1].day.mintemp_c ;
document.getElementById("text").innerHTML = response.forecast.forecastday[1].day.condition.text;




}

function displayAfterTomorrowCard(){

    switch (nextDay) {
        case "Sunday":
            thirdDay = "Monday"
            break;

            case "Monday":
                thirdDay = "Tuesday"
            break;


            case "Tuesday":
                thirdDay = "Wednesday"
            break;


            case "Wednesday":
                thirdDay = "Thursday"
            break;


            case "Thursday":
                thirdDay = "Friday"
            break;

            case "Friday":
                thirdDay = "Saturday"
            break;

            case "Saturday":
                thirdDay = "Sunday"
            break;
    
        default:
        break;
    }


document.getElementById("third-day").innerHTML = thirdDay;
document.getElementById("third-img").setAttribute("src" , `${response.forecast.forecastday[2].day.condition.icon}`);
document.getElementById("max-temp2").innerHTML = response.forecast.forecastday[2].day.maxtemp_c ;
document.getElementById("min-temp2").innerHTML = response.forecast.forecastday[2].day.mintemp_c ;
document.getElementById("text1").innerHTML = response.forecast.forecastday[2].day.condition.text;


}





searchInput.addEventListener("keyup" , function(e){

    searchCity = searchInput.value;
    getData();
    
})


$(function(){

    $(".loader").fadeOut(7000,function(){

        $(".loading").slideUp(2000 , function(){

            $("body").css("overflow" , "auto");
        })

       
    })



})

