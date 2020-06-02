import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

const MainComp = () => {
  const [zipCode, setZipCode] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setZipCode(e.target.value);
  };

  const getWeather = () => {
    if (zipCode == "") {
      setErrorMessage("Field Is Empty");
      setWeatherInfo(null);
    } else {
      setErrorMessage("");
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=137c7ca49af365102690e25ac22d6569&units=imperial
              `
        )
        .then((res) => {
          setWeatherInfo(res.data);
          setZipCode("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          data-testid="zipCode-field"
          className="zipCode__field"
          type="text"
          name="zipCode"
          placeholder="Zip Code..."
          onChange={handleChange}
          value={zipCode}
        />
        {errorMessage ? <p className="error">{errorMessage}</p> : ""}
        <div data-testid="button" className="arr" onClick={getWeather}>
          &rarr;
        </div>
      </form>
      {weatherInfo && <WeatherDetails weatherInfo={weatherInfo} />}
    </React.Fragment>
  );
};

export default MainComp;
