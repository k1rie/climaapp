import React,{useEffect, useState} from "react";

import reactDom from "react-dom";

import Cardclima from "../cards/cardclima";

import "./main.css"



export default function Main(){
  const [data, setData] = useState("Naan");

  const [lat, setLat] = useState(null);

  const [lon, setLon] = useState(null);

  const [succeful, setSucceful] = useState(false);



  
  
  const apikey = "32c8854becbe351a42a479dc6d85b0e0"



  return(
    <div id="container">
      <div className="cards">
      <Cardclima/>
      <div className="main__info"></div>
      </div>
    </div>
  )
}