import React from "react";
import { TextField } from "@mui/material";

const Weather = () => {
  return (
    <div className="container">
      <div className="weather-container">
        <TextField
          sx={{ bg: "white" }}
          id="outlined-textarea"
          label="Location"
          placeholder="Location"
        />
        <div className="weather-card">
          <div className="card-container">
            <div className="weather temp">
              <div style={{ display: "flex" }}>
                <h3>Dallas</h3>
                {"  "} <h3>Date</h3>
              </div>
              <h3>Sunny</h3>
              <h1>50oC</h1>
            </div>
            <div className="weather features">
              <div className="units">
                <h3>24oF</h3>
                <h3>Feel Like</h3>
              </div>
              <div className="units">
                <h3>70%</h3>
                <h3>Humidity</h3>
              </div>
              <div className="units">
                <h3>3km/h</h3>
                <h3>Wind Speed</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
