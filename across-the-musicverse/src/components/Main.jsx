import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artist from "./Artist";
import Album from "./Album";
import Track from "./Track";
import Search from "./Search";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/artist" element={<Artist />} />
    <Route path="/album" element={<Album />} /> */}
        {/* <Route path="/track" element={<Track />} /> */}

        <Route path="/search" element={<Search />} />
      </Routes>
      {/* <Route
          exact
          path="/Artist/:name"
          element={<ArtistDetails artist={artist} />}
        />
      </Routes> */}
    </div>
  );
}
