import React from "react";

const WeatherDetails = ({ weatherInfo }) => {
  const icon = `http://openweathermap.org/img/w/${weatherInfo.weather[0].icon}.png`;
  return (
    <div className="detailsContainer">
      <img src={icon} />
      <p data-testid="city" className="city">
        {weatherInfo.name}
      </p>
      <h4 data-testid="temp" className="temp">
        Temp: {weatherInfo.main.temp}
      </h4>
      <h4 data-testid="min" className="min">
        Min: {weatherInfo.main.temp_min}
      </h4>
      <h4 data-testid="max" className="max">
        Max: {weatherInfo.main.temp_max}
      </h4>
      <hr />
      <h3 data-testid="desc" className="desc">
        Description: {weatherInfo.weather[0].description}
      </h3>
    </div>
  );
};

export default WeatherDetails;
