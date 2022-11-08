import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Album from "./Album";

function AlbumDetails({ chart }) {
  let { id } = useParams();

  const [album, setAlbum] = useState(chart.find(album => album.id == id));
  // console.log(chart.find((album) => album.id == id));

  ///
  const [track, setTrack] = useState('')
  useEffect(() => {
 
   const getTrack = async () => {
  const response = await axios.get(album.tracklist)

    setTrack(response.data)
  //  console.log (track.data[0].title)
    
  
   }
   getTrack();
    }, []);

  ////

  return album && track ? (
    <div className="albumDetail">
      <h1>Artist: {album.artist.name}</h1>
      <h1>Album: {album.title}</h1>
 
      <img
        className="detailsImage"
        src={album.cover_big}
        width="350px"
        height="350px"
      />
<div className="trackList"><h2>Track List</h2></div> 
{track.data.map((x) => (
  <div key={x.title} className="trackList">
    <h2>{x.title}</h2>
  </div>
))}

  
    </div>

  ) : (
    <h1> album not found</h1>
  
    );


}

export default AlbumDetails;