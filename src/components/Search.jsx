import PropTypes from "prop-types";

function Search({ propData }) {
  const { getLocation, getWeatherUpdate, location } = propData;
  return (
    <>
      <form action="#" method="get" className="text-center">
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
          Check
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  propData: PropTypes.object.isRequired,
};

export default Search;
