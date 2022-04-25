import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

const Weather = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=${location}&key=56ca9e58c28c4647bc4e4834f1fb6be6`;

  const getWeather = async (event) => {
    if (event.key === "Enter") {
      const res = await axios.get(url);
      setData(res.data);
      console.log(res.data);
      setLocation("");
    } else if (event.value === null) {
      alert("Please enter a location name");
    }
  };

  return (
    <div className="container">
      <div className="weather-container">
        <TextField
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={getWeather}
          className="search-bar"
          id="outlined-textarea"
          label="Enter Location"
          placeholder="Location"
          fullWidth
        />
        {data?.data?.map((weather, k) => (
          <div className="weather card">
            <div className="card-container">
              <div className="weather temp">
                <div style={{ display: "flex" }}>
                  <h2 style={{ marginRight: "0.5em" }}>{weather.city_name}</h2>
                  <h2>{weather.datetime}</h2>
                </div>
                <h1 className="display-1">{weather.temp.toFixed(0)}°C</h1>
                <h2>{weather?.weather?.description}</h2>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${weather?.weather.icon}.png`}
                  key={k}
                  alt="weather icon"
                />
              </div>
              <div className="weather features">
                <div className="units">
                  <p>{weather?.app_temp.toFixed(0)}°C</p>
                  <p className="font-weight-bold">Feels Like</p>
                </div>
                <div className="units">
                  <p>{weather?.rh.toFixed(0)}%</p>
                  <p className="font-weight-bold">Humidity</p>
                </div>
                <div className="units">
                  <p>{weather?.wind_spd.toFixed(0)} km/h</p>
                  <p className="font-weight-bold"> Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
