import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherForcast = (props) => {
  return (
      <div className="weather">
          <WeatherIcon img={props.img}/>
        <img src={props.img} alt="" />
        <p>
          <span>conditions:</span>
          {props.condition}
        </p>
        <p>
          <span>time:</span>
          {props.time}
        </p>
      </div>
  );
}
export default WeatherForcast;                       