import { useState, useEffect } from "react";
import axios from "axios";

export default function Album() {
  //we need to create a state for our data
  const [album, setAlbum] = useState([]);

  //we need to call an axios function
  useEffect(() => {
    const getAlbum = async () => {
      const response = await axios.get("https://api.deezer.com/album/302127");

      //we need to set state of our data
      setAlbum(response.data.data);
    };

    getAlbum();
  }, []);

  //we need to see the data
  console.log(album);
  // console.log(artist[0].title);

  //let's also make a guard operator
  //so if data takes a few seconds/
  //our site doesn't break

  if (!album) {
    return <h2>Loading please wait</h2>;
  } else {
    //we have to map all 25 of our songs here in this div. If we don't have an artist we'll get Loading Please Wait
    return (
      <div className="grid">
        {album.map((album) => (
          <div key={album.name} className="card">
            <h3>Album Name: {album.title} </h3>
          </div>
        ))}
      </div>
    );
  }
}
