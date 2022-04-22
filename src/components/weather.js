import React from "react";
import { TextField } from "@mui/material";

const Weather = () => {
  // const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&city=Raleigh&key=56ca9e58c28c4647bc4e4834f1fb6be6`;

  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  return (
    <div className="container">
      <div className="weather-container">
        <TextField
          className="search-bar"
          id="outlined-textarea"
          label="Location"
          placeholder="Location"
          fullWidth
        />
        <div className="weather card">
          <div className="card-container">
            <div className="weather temp">
              <div style={{ display: "flex" }}>
                <h2 style={{ marginRight: "0.5em" }}>Dallas</h2>
                <h2>{date}</h2>
              </div>
              <h1 className="display-1">50°F</h1>
              <h2>Sunny</h2>
            </div>
            <div className="weather features">
              <div className="units">
                <p>24°F</p>
                <p className="font-weight-bold">Feels Like</p>
              </div>
              <div className="units">
                <p>70%</p>
                <p className="font-weight-bold">Humidity</p>
              </div>
              <div className="units">
                <p>3km/h</p>
                <p className="font-weight-bold"> Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
