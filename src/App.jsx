import { useState } from "react";
import "./App.css";

function App() {
  // current location
  const [location, setLocation] = useState("");
  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  // fetch weather data from server
  const getWeatherUpdate = (e) => {
    e.preventDefault();
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=6bacda324d074473941142546240401&q=${location}`,
      { mode: "cors" }
    )
      .then((results) => results.json())
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1 className="text-center bg-primary text-light p-2">Weather app</h1>
      <form action="#" method="get">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={location}
            onChange={getLocation}
          />
          <label htmlFor="floatingInput">Location</label>
        </div>
        <button className="btn btn-primary" onClick={getWeatherUpdate}>
          submit
        </button>
      </form>
    </>
  );
}

export default App;