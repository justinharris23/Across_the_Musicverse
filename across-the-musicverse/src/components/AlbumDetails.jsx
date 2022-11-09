import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";

function AlbumDetails({ chart }) {
  let { id } = useParams();

  const [album, setAlbum] = useState(chart.find(album => album.id == id));

  const [track, setTrack] = useState('')
  useEffect(() => {
 
   const getTrack = async () => {
  const response = await axios.get(album.tracklist)

    setTrack(response.data)
//console.log (track)
    
  
   }
   getTrack();
    }, []);

  ////

  return album && track ? (
    <div className="detail">
      <h1 className="artistDetail">Artist: {album.artist.name}</h1>
      <h1 className ="albumDetail">Album: {album.title}</h1>
 
      <img
        className="detailsImage"
        src={album.cover_big}
        width="400px"
        height="400px"
      />
<div className="trackList"><h2>Track List</h2></div> 

<div className="trackContainer">
{track.data.map((x) => (
 
 <div key={x.title} className="previewContainer">
    <h2 className="trackDetail">{x.title} </h2>
    
  <div className="trackPreview">
    <ReactAudioPlayer src={x.preview} onPlay controls muted />  </div>
  </div>
))}
</div>

  
    </div>

  ) : (
    <h1> album not found</h1>
  
    );


}

export default AlbumDetails;