import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Artist from "./Artist";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </div>
  );
}
