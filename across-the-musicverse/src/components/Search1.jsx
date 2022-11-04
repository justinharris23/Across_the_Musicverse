import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  //Call to API to intiate search goes here
  //How to change variable in the API call
  //use State with a handlechange and a handlesubmit function
  //like in the React forms lesson
  const search = async () => {
    const response = await axios.get(
      "https://api.deezer.com/search?q=the%20beatles"
    );
    console.log(response.data.data);
    //we need to set state of our data
    setArtist(response.data.data);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <tr>
          <th>Artist</th>
          <th>Albums</th>
          <th>Tracks</th>
        </tr>

        {search.artist(() => {
          <div>
            <tr>
              <td>{search.artist.name}</td>
              <td>{search.album.title}</td>
            </tr>
          </div>;
        })}
      </table>
    </div>
  );
};

export default Search;
