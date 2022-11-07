import { useEffect, useState } from "react";
import axios from "axios";

//1. We have our search bar in State
function Search() {
  //Initial State. This is an object. Form will have 3 key value pairs, each a blank string

  const [formState, setFormState] = useState("");
  const [search, setSearch] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState.inputBar);
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
    console.log(formState);
  };

  const getSearch = async () => {
    // e.preventDefault();
    console.log(formState);
    const response = await axios.get(
      `https://api.deezer.com/search?q=${formState[""]}`
    );
    console.log(response.data.data);

    setSearch(response.data.data);
  };
  //we need to set state of our data

  //Call to API to intiate search goes here
  //How to change variable in the API call
  //use State with a handlechange and a handlesubmit function
  //like in the React forms lesson

  return (
    <div className="search">
      <form id="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for Artist, Album, Track"
          value={formState.subject}
          onChange={handleChange}
        />
        <button className="searchButton" onClick={getSearch} value>
          <input type="button" id="searchButton" value="Search"></input>
        </button>
      </form>
      <div className="searchResults">
        {search?.map((data) => (
          <div key={data.name} className="searchCard">
            <h3>Artist: {data.artist.name} </h3>
            <h3>Album: {data.album.title} </h3>
            <h3>Song: {data.title} </h3>
            <div>
              <img
                className="searchImage"
                src={data.album.cover_medium}
                width="150px"
                height="150px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
