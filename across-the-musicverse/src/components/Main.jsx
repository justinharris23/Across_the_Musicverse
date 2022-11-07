import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Artist from "./Artist";
import Album from "./Album";
import Track from "./Track";
import Search from "./Search";
import AlbumDetails from "./AlbumDetails";

export default function Main() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const getChart = async () => {
      const response = await axios.get("https://api.deezer.com/chart");
      setChart(response.data.albums.data);
    };

    getChart();
  }, []);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        ` <Route exact path="/artist" element={<Artist />} />
        <Route exact path="/album" element={<Album />} />
        <Route exact path="/track" element={<Track />} />
        <Route exact path="/search" element={<Search />} />
        <Route
          exact
          path="/album/:id"
          element={<AlbumDetails chart={chart} />}
        />
      </Routes>
    </div>
  );
}
