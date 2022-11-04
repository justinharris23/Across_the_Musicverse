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

  useEffect(() => {
    const getSearch = async () => {
      // e.preventDefault();
      console.log(formState);
      const response = await axios.get(
        `https://api.deezer.com/search?q=${formState[""]}`
      );
      console.log(response.data.data);
      setSearch(response.data.tracks.data);
    };

    //we need to set state of our data

    getSearch();
  }, []);

  //we need to set state of our data

  //Call to API to intiate search goes here
  //How to change variable in the API call
  //use State with a handlechange and a handlesubmit function
  //like in the React forms lesson

  return (
    <div className="Search">
      <form id="input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for Artist, Album, Track"
          value={formState.subject}
          onChange={handleChange}
        />
        <input
          type="button"
          onClick={getSearch}
          id="searchButton"
          value="Click here"
        />
      </form>
      <div className="grid">
        {search.map((data) => (
          <div key={data.name} className="card">
            <h3>Artist: {data.name} </h3>
            <div className="artistImage">
              <img src={data.picture_medium} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
