import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";

const Weather = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=036622a7d32828f75f8e3e6540e081c1`;

  const today = new Date();
  const date = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()}`;

  const getWeather = async (event) => {
    if (event.key === "Enter") {
      const res = await axios.get(url);
      setData(res.data);
      console.log(res.data);
      setLocation("");
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
        <div className="weather card">
          <div className="card-container">
            <div className="weather temp">
              <div style={{ display: "flex" }}>
                <h2 style={{ marginRight: "0.5em" }}>{data?.name}</h2>
                <h2>{date}</h2>
              </div>
              <h1 className="display-1">{data?.main?.temp.toFixed(0)}°F</h1>
              <h2>
                {data?.weather?.map((status, k, i) => (
                  <>
                    <p key={k}>{status.main}</p>
                    <img
                      src={`http://openweathermap.org/img/wn/${status.icon}@2x.png`}
                      key={i}
                      alt="weather icon"
                    />
                  </>
                ))}
              </h2>
            </div>
            <div className="weather features">
              <div className="units">
                <p>{data?.main?.feels_like.toFixed(0)}°F</p>
                <p className="font-weight-bold">Feels Like</p>
              </div>
              <div className="units">
                <p>{data?.main?.humidity}%</p>
                <p className="font-weight-bold">Humidity</p>
              </div>
              <div className="units">
                <p>{data?.wind?.speed} km/h</p>
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
