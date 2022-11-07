import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function AlbumDetails({ chart }) {
  let { id } = useParams();

  const [album, setAlbum] = useState(chart.find(album => album.id == id));
  console.log(chart.find((album) => album.id == id));
  

  //Initial Way
  // useEffect(() => {
  //   console.log(chart);
  //   let selectedAlbum = chart.find((album) => album.id === id);


  //   setAlbum(selectedAlbum);

  //   // setAlbum(chart[3]);

  // }, []);
  //////

  return album ? (
    <div className="detail">
      <h1>{album.title}</h1>
      <img
        className="detailsImage"
        src={album.cover_big}
        width="350px"
        height="350px"
      />
    </div>
  ) : (
    <h1> album not found</h1>
  );
}

export default AlbumDetails;
