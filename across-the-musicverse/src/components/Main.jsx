import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artist from "./Artist";
import Album from "./Album";
import Search from "./Search2";

export default function Main() {
  return (
    <div>
      <div>
        <h1>header image goes here</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
        {/* <Route path="/search" element={<Search />} /> */}
      </Routes>
    </div>
  );
}
