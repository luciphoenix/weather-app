import PropTypes from "prop-types";

function WeatherInfo({ conditions }) {
  {
    /* weather current image */
  }
  return (
    <>
      <div className="mx-auto my-3 rounded text-center text-light default">
        WEATHER UPDATE
      </div>

      <div className={conditions === "" && "empty"}>
        <p className="text-light text-center fs-1">
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
        <p className="text-light text-center fs-5">
          {conditions ? conditions.current.temp_c : "Not provided"}
        </p>
        <p className="text-light text-center fs-3">
          {conditions ? conditions.current.condition.text : "Not provided"}
        </p>
        {/* weather details */}
        <div className="container my-3">
          <div className="row g-2 weather-detail">
            <div className="col bg-light text-center rounded">
              <p>As AT</p>
              <p>
                {conditions ? conditions.location.localtime : "Not provided"}
              </p>
            </div>
            <div className="col bg-light text-center rounded">
              <p>Humidity</p>
              <p>{conditions ? conditions.current.humidity : "Not provided"}</p>
            </div>
            <div className="col bg-light text-center rounded">
              <p>Feels like</p>
              <p>
                {conditions ? conditions.current.feelslike_c : "Not provided"}
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