import { useState, useEffect } from "react";
import axios from "axios";

export default function Artists() {
  //we need to create a state for our data
  const [artist, setArtist] = useState();

  //we need to call an axios function
  useEffect(() => {
    const getArtist = async () => {
      const response = await axios.get("https://api.deezer.com/artist/1");
      console.log(response.data.results);

      //we need to set state of our data
      setArtist(response.data.results);
    };

    getArtist();
  }, []);

  //we need to see the data
  console.log(artist);

  //let's also make a guard operator
  //so if data takes a few seconds/
  //our site doesn't break

  return (
    <div>
      <h2>data goes here</h2>
    </div>
  );
}
