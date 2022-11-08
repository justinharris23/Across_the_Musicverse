import React from "react";
import Artist from "./Artist";
import Album from "./Album";
import Track from "./Track";

export default function Home() {
  return (
    
    <div className="home">
      {/* <h3>Welcome to my home page</h3> */}
      <div>
        <div className="topMusic">
          <h4 className="mostStreamed">
            Most Streamed Artists
            <Artist />
          </h4>
          <h4 className="mostStreamed">
            Most Streamed Albums
            <Album />
          </h4>
          <h4 className="mostStreamed">
            Most Streamed Tracks
            <Track />
          </h4>
        </div>
      </div>
    </div>
  );
}
