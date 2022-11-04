import { useEffect, useState } from "react";
import axios from "axios";

function Search() {
  //Initial State. This is an object. Form will have 3 key value pairs, each a blank string
  const initialState = {
    issueType: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialState);
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    const getSearch = async () => {
      const response = await axios.get(
        "https://developers.deezer.com/api/search"
      );

      //we need to set state of our data
      setFormState(response.data.artists.data);
    };

    getSearch();
  }, []);

  //Call to API to intiate search goes here
  //How to change variable in the API call
  //use State with a handlechange and a handlesubmit function
  //like in the React forms lesson

  return (
    <div className="Search">
      <form id="input">
        <input
          type="text"
          placeholder="Search for Artist, Album, Track"
          id="inputBar"
          value={formState.subject}
          onChange={handleChange}
        />
        <input type="button" id="searchButton" value="Click here" />
      </form>
    </div>
  );
}

export default Search;
