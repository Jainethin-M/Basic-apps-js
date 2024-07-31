// console.log('hello')
const apiKey="bd126073d40c5ddca96785e6178976c2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".details").style.display="none";
    }else{
        
        document.querySelector(".error").style.display="none";
        var data=await response.json();
        
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"&degc";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
        document.querySelector(".details").style.display="flex";
        document.querySelector(".weather").style.display="block";
    }
}
searchBtn.addEventListener("click",()=>{
    
    checkWeather(searchBox.value);
})
