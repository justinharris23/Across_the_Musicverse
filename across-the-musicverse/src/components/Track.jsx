import { useState, useEffect } from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
// import ReactJkMusicPlayer from "react-jinke-music-player";
// import "react-jinke-music-player/assets/index.css";

export default function Track() {
  //we need to create a state for our data
  const [chart, setChart] = useState(null);

  //we need to call an axios function
  useEffect(() => {
    const getChart = async () => {
      const response = await axios.get("https://api.deezer.com/chart");

      //we need to set state of our data
      setChart(response.data.tracks.data);
     
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
      <div className="grid">
        {chart.map((data) => (
          <div key={data.name} className="trackCard">
            <div className="trackData">
            <h3>Song: {data.title} </h3>
            <h3>Preview Song:</h3>
</div>
            {/* Audio Player will allow tracks playble on press to the play button  */}
            <div id="audio-player-container">
              <ReactAudioPlayer src={data.preview} onPlay controls muted />
            </div>

            <div className>
              <img
                className="trackImage"
                src={data.artist.picture_medium}
                width="180px"
                height="180px"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
