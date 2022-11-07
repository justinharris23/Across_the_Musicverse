import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AlbumDetails({ chart }) {
  let { id } = useParams();

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    console.log(chart);
    // let selectedAlbum = chart?.find((album) => album.id === id);
    // console.log(selectedAlbum);
    // setAlbum(selectedAlbum);

    setAlbum(chart[0]);

    console.log(album);
  }, []);

  return album ? (
    <div className="detail">
      <h1>{album.artist.name}</h1>
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
