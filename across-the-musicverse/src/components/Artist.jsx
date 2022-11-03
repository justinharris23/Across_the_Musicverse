import { useState, useEffect } from "react";
import axios from "axios";

export default function Artist() {
  //we need to create a state for our data
  const [artist, setArtist] = useState([]);

  //we need to call an axios function
  useEffect(() => {
    const getArtist = async () => {
      const response = await axios.get(
        "https://api.deezer.com/search?q=the%20beatles"
      );
      console.log(response.data.data);
      //we need to set state of our data
      setArtist(response.data.data);
    };

    getArtist();
  }, []);

  //we need to see the data
  console.log(artist);
  // console.log(artist[0].title);
  //let's also make a guard operator
  //so if data takes a few seconds/
  //our site doesn't break

  if (!artist) {
    return <h2>Loading please wait</h2>;
  } else {
    //we have to map all 25 of our songs here in this div. If we don't have an artist we'll get Loading Please Wait
    return (
      <div className="grid">
        {artist.map((data) => (
          <div key={data.name} className="card">
            <h3>Album Name: {data.album.title} </h3>
            <h3>Song Title: {data.title} </h3>
          </div>
        ))}
      </div>
    );
  }
}
