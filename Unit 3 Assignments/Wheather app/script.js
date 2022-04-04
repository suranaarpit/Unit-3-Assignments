//fetch()
//url()
//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//3e1fa14633f72c140180241b63970ccf

let maindiv = document.getElementById("maindiv")

async function getWeather(){

try{

    let city = document.getElementById("city").value

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e1fa14633f72c140180241b63970ccf&units=metric`)

    let data = await res.json();

    appendData(data)

    console.log('data:', data);

}

catch(err){

console.log('err:', err)
error();
}


}
function error(){

    document.getElementById("maindiv").innerHTML = "";
    let img = document.createElement("img");
    img.setAttribute("id", "errorGif")
    img.src = "https://c.tenor.com/swTDQJ85dDEAAAAC/aaaa.gif";
    document.getElementById("maindiv").append(img);
    
    
    }


function appendData(data){

maindiv.innerHTML = "";

let div1 = document.createElement("div");
div1.setAttribute("class", "infoCont")

let div2 = document.createElement("div");
div2.setAttribute("class", "mapCont")

let name = document.createElement("h2");

name.innerText = `City: ${data.name}`;

let temp = document.createElement("p");

temp.innerText = `Temp: ${data.main.temp}`;

let pressure = document.createElement("p");

pressure.innerText = `Pressure: ${data.main.pressure}`;

let humidity = document.createElement("p");

humidity.innerText = `Humidity: ${data.main.humidity}`;


let feels = document.createElement("p");

feels.innerText = `Feels Like: ${data.main.feels_like}`;

let ground = document.createElement("p");

ground.innerText = `Ground Level: ${data.main.grnd_level}`;

let sealevel = document.createElement("p");

sealevel.innerText = `Sea Level: ${data.main.sea_level}`;
    
let iframe = document.createElement("iframe");
iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    
div1.append(name, temp, pressure, humidity, feels, ground, sealevel);    

div2.append(iframe);

maindiv.append(div1, div2);
}


// feels_like: 24.63
// grnd_level: 963
// humidity: 23
// pressure: 1011
// sea_level: 1011
