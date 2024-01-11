import PropTypes from "prop-types";

function Search({ propData }) {
  const { getLocation, getWeatherUpdate, location } = propData;
  return (
    <>
      <form action="#" method="get">
        <input
          type="text"
          className=""
          id="floatingInput"
          placeholder="search location...."
          value={location}
          onChange={getLocation}
        />
        <button className="search-btn" onClick={getWeatherUpdate}>
          <img src="../images/search.svg" alt="" className="img-fluid" />
        </button>
      </form>
    </>
  );
}

Search.propTypes = {
  propData: PropTypes.object.isRequired,
};

export default Search;
