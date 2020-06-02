import React from "react";

const WeatherDetails = ({ weatherInfo }) => {
  const icon = `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
  console.log("DETAILS", weatherInfo);
  return (
    <div className="detailsContainer">
      <img src={icon} />
      <p className="city">{weatherInfo.name}</p>
      <h4 className="temp">Temp: {weatherInfo.main.temp}</h4>
      <h4 className="min">Min: {weatherInfo.main.temp_min}</h4>
      <h4 className="max">Max: {weatherInfo.main.temp_max}</h4>
      <hr />
      <h3 className="desc">
        Description: {weatherInfo.weather[0].description}
      </h3>
    </div>
  );
};

export default WeatherDetails;
