import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artist from "./Artist";
import Album from "./Album";

export default function Main() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
      </Routes>
    </div>
  );
}
