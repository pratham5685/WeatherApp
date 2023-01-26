// Initializing all elements constants
const temperateField = document.querySelector(".weather1"); //
const cityField = document.querySelector(".weather2 p");//
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");//
const weatherField = document.querySelector(".weather3 span");//
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");


let target = 'Canada'; // by default  

const fetchData = async(target) => {

    try { // if input is valid 
        const url = `https://api.weatherapi.com/v1/current.json?key=a384be39d4424a80b74131447232601&q=${target}`;

        const response = await fetch(url); // fetches data from apui
        const data = await response.json(); // json to data form
    
    
        const fTemp = data.current.temp_c;
        const fcity = data.location.name ;
        const fWeather = data.current.condition.text ;
        const fDate = data.location.localtime;
        const fEmoji = data.current.condition.icon

        updateDom(fTemp,fcity,fWeather,fDate,fEmoji);
        
    } catch {
        // if input is not valid
        alert('Location not found ');
    }
    
 
};

fetchData(target); // function call 

// function for manupilating DOM Elements 

function updateDom (temp,city,weather,date,emoji) {
    temperateField.innerText = temp;
    cityField.innerText = city ;
    emojiField.src = emoji ;
    weatherField.innerText = weather;
    dateField.innerText = date;

};

// adding eventListener to the Form 

form.addEventListener("submit",(e)=>{
    e.preventDefault();  // to avoid reload on submit action
    target = searchField.value;
    // console.log(target); test
    fetchData(target);
})




