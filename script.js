

var trigger=document.getElementById("trigger");
var city_entry=document.getElementById("city_entry")
var insert_city=document.querySelectorAll("#city")
        var climate=document.querySelectorAll("#climate")
        var temp=document.querySelectorAll("#temp")
        var visibility=document.querySelectorAll("#visibility")
        var Pressure=document.querySelectorAll("#Pressure")
        var humidity=document.querySelectorAll("#humidity")
        var description=document.querySelectorAll("#description")

function weather(city){
        var uri=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=989c617f4547ce0579d9bfdc9b23d51f`
        var map_data=0
    var data= fetch(uri)
    data.then((respoonse)=>{
        if(!respoonse.ok){
            throw `${respoonse.status} enter the  city correctly`
        }
        
        return respoonse.json()
    }).then((data)=>{
        
        for ( let i=0;i<Pressure.length;i++){

            insert_city[i].innerText=data.name
            Pressure[i].innerText=data.main.pressure
            humidity[i].innerHTML=data.main.humidity
            visibility[i].innerText=data.visibility
            climate[i].innerText=data.weather[0].main
            map_data=data.weather[0].main
            description[i].innerText=data.weather[0].description
           var temperature=Math.floor(((data.main.temp)-273))
            if (temperature>=28){
    
    
                temp[i].classList.remove("text-blue-500") 
                temp.classList.add("text-yellow-300")
                temp.classList.remove("text-yellow-700")
                temp.classList.remove("text-red-500") 
            }
            else if(temperature<=22){
                temp[i].classList.remove("text-yellow-500")
                temp[i].classList.remove("text-red-500")  
                temp[i].classList.add("text-blue-300")
                temp[i].classList.remove("text-yellow-700")
            }
            else if(temperature>=32){
         temp[i][i].classList.remove("text-yellow-500")
                temp[i][i].classList.remove("text-blue-500")  
                temp[i][i].classList.add("text-yellow-700")
    temp[i][i].classList.remove("text-red-500")
            }
            else if(temperature>=38){
         temp[i].classList.remove("text-yellow-500")
                temp[i][i].classList.remove("text-blue-500")  
                temp[i][i].classList.add("text-red-700")
                temp[i][i].classList.remove("text-yellow-700")
            }
        temp[i].innerText=temperature+"°C"
        }
        

        console.log(data)
    }).catch((error)=>{
        alert(error)
        });


var uri2=fetch(`https://pixabay.com/api/videos/?key=52837332-79eca5211d3cc7885316c17be&q=${map_data}`)
var video=document.querySelector("video")
uri2.then((response)=>{
    if(!response.ok){
        throw "the link is not loadedproperly"
    }
    return response.json()

}).then((data)=>{
    console.log(Math.floor(Math.random()))
    video.setAttribute("src",data.hits[0].videos.large.url)
    video.addEventListener("loadeddata",()=>{

        video.play()
    })
    console.log(data.hits[0])
}).catch((error)=>{
    console.log(error)
})

}
setTimeout(() => {
    
    weather("chennai")
    console.log("starting")
}, 1000);
trigger.onclick=()=>{
    
var city=city_entry.value
weather(city)
  console.log("trigger")    
  
  
}