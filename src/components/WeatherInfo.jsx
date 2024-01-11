import PropTypes from "prop-types";

function WeatherInfo({ conditions }) {
  {
    /* weather current image */
  }
  return (
    <>
      <div className={conditions === "" && "empty"}>
        <p className="text-light text-center location my-0">
          {conditions
            ? conditions.location.name + "," + conditions.location.country
            : "Not provided"}
        </p>
        <img
          src={conditions ? conditions.current.condition.icon : ""}
          alt="weather image"
          title="this is a weather image showing the current state of the sky"
          className="img-fluid d-block mx-auto"
        />
        <p className="text-light text-center temp">
          {conditions ? conditions.current.temp_c : "Not provided"}
          <span className="celcius">
            <sup>o</sup>C
          </span>
        </p>
        <p className="text-light text-center fs-3">
          {conditions ? conditions.current.condition.text : "Not provided"}
        </p>
        {/* weather details */}
        <div className="container my-3">
          <div className="row g-2 weather-detail">
            <div className="col bg-light text-center rounded">
              <p className="info">
                Update~<span className="hr">24hr</span>
              </p>
              <p className="details my-0  ">
                {conditions
                  ? conditions.location.localtime.split(" ")[1]
                  : "Not provided"}
              </p>
            </div>
            <div className="col bg-light text-center rounded">
              <p className="info">Humidity</p>
              <p className="details my-0">
                {conditions ? conditions.current.humidity : "Not provided"}%
              </p>
            </div>
            <div className="col bg-light text-center rounded">
              <p className="info">Feels like</p>
              <p className="details my-0">
                {conditions ? conditions.current.feelslike_c : "Not provided"}
                <span className="celcius">
                  <sup>o</sup>C
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// prop validation
WeatherInfo.propTypes = {
  conditions: PropTypes.object.isRequired,
};
export default WeatherInfo;
