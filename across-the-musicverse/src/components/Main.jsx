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
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const getAlbum = async () => {
      const response = await axios.get("https://api.deezer.com/chart");
      console.log(response.data.results);
      setAlbum(response.data.results);
    };

    getAlbum();
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
          element={<AlbumDetails album={album} />}
        />
      </Routes>
    </div>
  );
}
