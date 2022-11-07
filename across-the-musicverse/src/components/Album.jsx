import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Album() {
  //we need to create a state for our data
  const [chart, setChart] = useState(null);
  let navigate = useNavigate();

  let { i } = useParams();

  const showAlbum = (album) => {
    navigate(`album/${album.id}`);
  };

  //we need to call an axios function
  useEffect(() => {
    const getChart = async () => {
      const response = await axios.get("https://api.deezer.com/chart");

      //we need to set state of our data
      setChart(response.data.albums.data);
    };

    getChart();
  }, []);

  //we need to see the data
  // console.log(artist[0].title);

  //let's also make a guard operator
  //so if data takes a few seconds/
  //our site doesn't break

  if (!chart) {
    return <h2>Loading please wait</h2>;
  } else {
    //we have to map all 25 of our songs here in this div. If we don't have an artist we'll get Loading Please Wait
    return (
      <div className="topAlbum">
        {chart.map((data) => (
          <div
            key={data.name}
            className="albumCard"
            onClick={() => showAlbum(data)}
          >
            <h3>Album: {data.title} </h3>
            <h3>Artist: {data.artist.name} </h3>
            <div className="albumImage">
              <img src={data.cover_medium} width="200px" height="200px" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
