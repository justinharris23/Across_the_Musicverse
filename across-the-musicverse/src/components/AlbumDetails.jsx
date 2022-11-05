import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AlbumDetails(props) {
  let { id } = useParams();

  const [album, setAlbum] = useState(null);

  useEffect(() => {
    let selectedAlbum = props.albums.find((album) => album.id === id);

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
