import react, { useEffect, useState } from "react";

import reactDom from "react-dom";

import soleado from "./cloud_weather_sun_icon-icons.com_62490.svg"

import "./cardclima.css"

export default function Cardclima(props){

  const [correct,setCorrect] = useState(false)

  const [data, setData] = useState("Naan");

  const [lat, setLat] = useState();

  const [lon, setLon] = useState();


  
  const apikey = "32c8854becbe351a42a479dc6d85b0e0"


  
  
function getposition(){
  navigator.geolocation.getCurrentPosition(function(position) {
    setLat(position.coords.latitude)
    setLon(position.coords.longitude)
  });
}

getposition()

  async function get(){

try{
const time = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`).then((response)=>{console.log(response);return response.json()}).then((response)=>{setData(response);console.log(response);setCorrect(true);return response})
}catch(e){
  console.error(e)
  setCorrect(false)
}
  }

  useEffect(() => {
async function getData(){
  if(correct == false){
    await get()
  }
  if(correct == true){
    document.querySelector(".data__info").textContent = Math.floor(data.main.temp-273.15)+"°C"
    console.log("dada")
  }{
    setCorrect(true)

  }
}
  getData()


 });

  return(
    <div id="cardclimacontainer">
      <div className="img__cont">
        <img className="img__img" src={soleado}/>
      </div>
      <div className="data__container">
    <p className="data__info">
    </p>
      </div>
    </div>
  )
}