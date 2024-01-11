import { useState } from "react";
import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Forecast from "./components/Forecast";

function App() {
  // current location
  const [location, setLocation] = useState("");
  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const [conditions, setConditions] = useState("");
  const [forecast, setForecast] = useState([]);
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
        setConditions(results);
        const newForecast = results.forecast.forecastday[0].hour.filter(
          (hr) => hr.time.split(" ")[1] > date.getHours() + ":00"
        );
        setForecast(newForecast);
      })
      .catch((err) => console.log(err));
  };
  console.log(forecast);
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

      {/* component for current weather information */}
      <WeatherInfo conditions={conditions} />

      {/* input for user location */}
      <Search propData={propData} />
      <Forecast forecast={forecast} />
      <Footer />
    </>
  );
}

export default App;
