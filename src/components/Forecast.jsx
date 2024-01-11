import PropTypes from "prop-types";
function Forecast({ forecast }) {
  console.log("what");
  console.log(forecast.length);
  return (
    <section>
      <h5 className="text-light  forecast-heading">Today weather Forecast</h5>
      <div className="forecasts-container container rounded">
        <div className="row fore-col">
          {forecast.slice(0, 4).map((f, i) => (
            <div className="col bg-light rounded text-center" key={i}>
              <p className="fw-2">{f.time.split(" ")[1]}</p>
              <p className="details">
                {f.temp_c}
                <span className="celcius">
                  <sup>o</sup>C
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <br />
    </section>
  );
}

Forecast.propTypes = {
  forecast: PropTypes.array,
};

export default Forecast;
