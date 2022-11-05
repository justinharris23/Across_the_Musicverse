import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AlbumDetails({ chart }) {
  let { id } = useParams();

  const [album, setAlbum] = useState(null);
  console.log(chart);

  useEffect(() => {
    let selectedAlbum = chart?.find((album) => album.id === id);
    console.log(selectedAlbum);
    setAlbum(selectedAlbum);
  }, []);

  return album ? (
    <div className="detail">
      <h1>{album.artist.name}</h1>
      <h2>{album.title}</h2>
      <h2>{album.manufacturer}</h2>
    </div>
  ) : (
    <h1> album not found</h1>
  );
}

export default AlbumDetails;
