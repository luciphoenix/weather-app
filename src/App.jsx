import { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import Error from "./components/Error";
import WecomeMessage from "./components/WecomeMessage";

function App() {
  // current location
  const [location, setLocation] = useState("");
  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const [conditions, setConditions] = useState("");
  const [forecast, setForecast] = useState([]);

  const [message, setMessage] = useState(<WecomeMessage />);

  const date = new Date();

  // fetch weather data from server
  const getWeatherUpdate = (e) => {
    e.preventDefault();

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=6bacda324d074473941142546240401&q=${location}`,
      { mode: "cors" }
    )
      .then((results) => results.json())
      .then((results) => {
        // check if a bad request was made
        // if (!results.error) {
        setConditions(results);

        const newForecast = results.forecast.forecastday[0].hour.filter(
          (hr) => {
            // return date in 09:00 form instead of 9:00 formate
            let time = date.getHours().toString().split("");
            if (time.length < 2) {
              time.unshift("0");
            }
            time = time.join("");

            return hr.time.split(" ")[1] > time + ":00";
          }
        );
        setForecast(newForecast);
        // } else {
        //
        // }
      })
      .catch((error) => {
        console.log(error);
        // reset states to initail if bad request was made
        setForecast([]);
        setConditions("");
        setMessage(<Error />);
      });
  };
  const propData = {
    getLocation,
    getWeatherUpdate,
    location,
  };

  return (
    <>
      <h1 className="text-center bg-primary text-light p-2 head">
        Weather app
      </h1>
      {/* input for user location */}
      <Search propData={propData} />
      {/* component for current weather information */}
      <div className="mx-auto my-3 rounded text-center text-light default">
        WEATHER UPDATE
      </div>
      {/* checks if there is no error with request */}
      {conditions !== "" ? (
        <WeatherInfo conditions={conditions} />
      ) : (
        <div>{message}</div>
      )}
      {/* Renders on when there is a search */}
      {forecast.length && <Forecast forecast={forecast} />}
      <Footer />
    </>
  );
}

export default App;
