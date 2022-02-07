 //362baeb6a634fdf27e99b0083e6f6907
    /// http://www.omdbapi.com/?i=tt3896198&apikey=695ddea7
    //695ddea7
    let container = document.getElementById("data");
    let container2 = document.getElementById("daily");
    
    let right_box = document.getElementById("right");
    let res2;
  
    async function getWeather(){
      
      try{
      
        let city = document.getElementById("city").value;
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=362baeb6a634fdf27e99b0083e6f6907`);
       //resX2 = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAAgt5VQ07ShHcJrIxza4N97C_lL3XdX9Y&q=${city}`
       res2=`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`
       
  
      // console.log(data.coord.lon , data.coord.lat)
  
      let data = await res.json()
  
      let daily = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lon}&lon=${data.coord.lat}&exclude=hourly,minutely&appid=362baeb6a634fdf27e99b0083e6f6907`)
       
       let data_daily= await daily.json()
       console.log("daily " ,data_daily)
     
      //console.log("mapdata" , data2)
      console.log('data' , data)
  
     showWeather(data);
     showDaily(data_daily)
  
      }catch(err){
        console.log("err", err)
      }
      
  
    }
  // key= AIzaSyAAgt5VQ07ShHcJrIxza4N97C_lL3XdX9Y
  
  
     
  
    function showWeather(weather){  //weather is the data from api
      console.log(res2)
       container.innerHTML= null;
       right_box.innerHTML= null;
  
      let name = document.createElement("p");
      name.innerText = weather.name;
  
      let icon = document.createElement("img")
      icon.setAttribute("class", "icon")
      icon.src= "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"
  
      let temp = document.createElement("p");
      temp.innerText = Math.round(weather.main.temp - 273) +"°C";
      temp.setAttribute("class", "temp")
  
      let show = document.createElement("p")
      show.innerText= weather.weather[0].description.toUpperCase()
      
      let card = document.createElement("div")
      card.setAttribute("class" , "card")
      card.append(name ,icon , temp , show )
      
  
  
      let min = document.createElement("p")
      min.innerText= "Low: "+Math.round(weather.main.temp_min - 273) +"°C";
      min.setAttribute("class" , "txt")
  
      let max = document.createElement("p")
      max.innerText= "High: "+Math.round(weather.main.temp_max - 273) +"°C";
      max.setAttribute("class" , "txt")
  
      let wind = document.createElement("p")
      wind.innerText= "Wind Speed: "+weather.wind.speed+"m/sec";
      wind.setAttribute("class" , "txt")
  
      
      
      let MasterSUN=document.createElement("div")
      MasterSUN.setAttribute("class" , "mastersun")
      
      let SunUP= document.createElement("div")
     
      let sunR = document.createElement("p")
      let x=  weather.sys.sunrise
      let resR= new Date(x*1000)
      
      sunR.innerText= "Rise:"+ resR.toLocaleTimeString()
  
      let iconUP= document.createElement("img")
      iconUP.src= "https://cdn-icons-png.flaticon.com/512/852/852095.png"
      
      iconUP.setAttribute("class" , "sun")
      
      SunUP.append(iconUP , sunR)  ////
  
   
      
      let SunDOWN= document.createElement("div")
  
      let sunS = document.createElement("p")
      let y=  weather.sys.sunset
      let resS= new Date(y*1000)
      
      sunS.innerText= "Down:"+ resS.toLocaleTimeString()
  
      let iconDOWN= document.createElement("img")
      iconDOWN.src= "https://cdn-icons.flaticon.com/png/512/1844/premium/1844242.png?token=exp=1637919057~hmac=95fc34e37cac1c5114b4812b5320f996"
      iconDOWN.setAttribute("class" , "sun")
      
      SunDOWN.append(iconDOWN , sunS)
  
      MasterSUN.append(SunUP , SunDOWN)
      
  
      
  
      let map= document.createElement("iframe")
      map.setAttribute("class","map")
      map.src= res2;
  
     container.append(card , min , max , wind  , MasterSUN);
     right_box.append(map)
  
    }
      
  
    function  showDaily(w)
    {
      container2.innerHTML= null;
      let x=0;
  
      
     
      for(let i=0; i<7;i++)
      {  let div = document.createElement("div");
        div.setAttribute("class" , "daily_card")
  
          let d_icon = document.createElement("img");
      d_icon.src= "http://openweathermap.org/img/w/" +w.daily[i].weather[0].icon+ ".png";
      d_icon.setAttribute("class" , "d_icon")
  
      let d_min = document.createElement("p")
      d_min.innerText= ""+Math.round(w.daily[i].temp.min - 226) +"°C";
      d_min.setAttribute("class" , "txt")
  
      let d_max = document.createElement("p")
      d_max.innerText= ""+Math.round(w.daily[i].temp.max - 226) +"°C";
      d_max.setAttribute("class" , "txt")
  
  
  
  
      div.append(d_icon ,d_max ,d_min )
  
      container2.append(div)
  
      }
  
  
      
  
  
      
  
  
    }
    
  
  