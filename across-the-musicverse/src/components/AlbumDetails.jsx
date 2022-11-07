import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AlbumDetails({ chart }) {
  let { id } = useParams();

  const [album, setChart] = useState(null);

  useEffect(() => {
    const getChart = async () => {
      const response = await axios.get("https://api.deezer.com/chart");
      console.log(response.data);

      //we need to set state of our data
      setChart(response.data.tracks.data);
    };

    getChart();
  }, []);

  ///Initial Way
  // useEffect(() => {
  //   console.log(chart);
  //   let selectedAlbum = chart?.find((album) => album.id === id);
  // console.log(selectedAlbum);
  // setAlbum(selectedAlbum);

  //   setAlbum(chart[0]);

  //   console.log(album);
  // }, []);
  ////////

  return album ? (
    <div className="detail">
      <h1>{album.data.data.title}</h1>
      <h2>{album.title}</h2>
      <img
        className="detailsImage"
        src={album.cover_big}
        width="250px"
        height="250px"
      />
    </div>
  ) : (
    <h1> album not found</h1>
  );
}

export default AlbumDetails;
