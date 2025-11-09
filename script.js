

var trigger=document.getElementById("trigger");
var city_entry=document.getElementById("city_entry")
var insert_city=document.querySelectorAll("#city")
        var climate=document.querySelectorAll("#climate")
        var temp=document.querySelectorAll("#temp")
        var visibility=document.querySelectorAll("#visibility")
        var Pressure=document.querySelectorAll("#Pressure")
        var humidity=document.querySelectorAll("#humidity")
        var description=document.querySelectorAll("#description")
       var editors=true;

 function weather(city){
        var uri=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=989c617f4547ce0579d9bfdc9b23d51f`
        var map_data=0
    var data=  fetch(uri)
    data.then((respoonse)=>{
        if(!respoonse.ok){
            throw `${respoonse.status}  enter the  city correctly`
        }
        
        return respoonse.json()
    }).then((data)=>{
        
        for ( let i=0;i<Pressure.length;i++){

            insert_city[i].innerText=data.name
            Pressure[i].innerText=data.main.pressure
            humidity[i].innerHTML=data.main.humidity
            visibility[i].innerText=data.visibility
            climate[i].innerText=data.weather[0].main
            
            description[i].innerText=data.weather[0].description
           var temperature=Math.floor(((data.main.temp)-273))
            if (temperature>=28){
    
    
                temp[i].classList.remove("text-blue-500") 
                temp[i].classList.add("text-yellow-300")
                temp[i].classList.remove("text-yellow-700")
                temp[i].classList.remove("text-red-500") 
            }
            else if(temperature<=22){
                temp[i].classList.remove("text-yellow-500")
                temp[i].classList.remove("text-red-500")  
                temp[i].classList.add("text-blue-300")
                temp[i].classList.remove("text-yellow-700")
            }
            else if(temperature>=32){
         temp[i].classList.remove("text-yellow-500")
                temp[i].classList.remove("text-blue-500")  
                temp[i].classList.add("text-yellow-700")
    temp[i].classList.remove("text-red-500")
            }
            else if(temperature>=38){
         temp[i].classList.remove("text-yellow-500")
                temp[i].classList.remove("text-blue-500")  
                temp[i].classList.add("text-red-700")
                temp[i].classList.remove("text-yellow-700")
            }
        temp[i].innerText=temperature+"°C"
        }
        
editors=true
        console.log(data)
    }).catch((error)=>{
        alert("video error:"+error)
        editors=false
        });

map_data=climate[0].innerHTML
if(editors==true){
var uri2= fetch(`https://pixabay.com/api/videos/?key=52837332-79eca5211d3cc7885316c17be&q=${map_data}`)
console.log("map",map_data)
var video=document.getElementById("video1")
var video2=document.getElementById("video2")
uri2.then((response)=>{
    if(!response.ok){
        throw "the link is not loaded properly kidly reload the page"
    }
    return response.json()

}).then((data)=>{
    video.classList.remove("hidden")
    video.play()
    var rand=Math.floor((Math.random()*10))
    video2.classList.add("hidden")
    if(window.innerWidth<=450){

        video2.setAttribute("src",data.hits[rand].videos.small.url)
    }
    else{
        video2.setAttribute("src",data.hits[rand].videos.large.url)
    }

    video2.addEventListener("loadeddata",()=>{
video.classList.add("hidden")

video2.classList.remove("hidden")

playPromise=video2.play()
console.log(video.paused)

   if (playPromise !== undefined) {
    playPromise.then(() => {
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
         video.pause()   
     
     console.log(Math.floor(Math.random()))
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
      video.play()
      console.log(error)
    });
 
   }
 



    console.log(data.hits[0])
    })
}).catch((error)=>{
    alert("the video is not loaded sucessfully ")
    console.log(error)
})
}
}
window.addEventListener("load",()=>{

    setTimeout(() => {
        
        weather("chennai")
        console.log("starting")
    }, 1000);
})
trigger.onclick=()=>{
    
var city=city_entry.value
weather(city)
  console.log("trigger")    
  
  

}






