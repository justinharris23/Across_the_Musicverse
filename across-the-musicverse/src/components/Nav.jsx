import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <h2>Home</h2>{" "}
      </Link>
      <Link to="/artist">
        {" "}
        <h2>Top Artists</h2>{" "}
      </Link>
      <Link to="/album">
        {" "}
        <h2>Top Albums</h2>{" "}
      </Link>
      <Link to="/track">
        {" "}
        <h2>Top Tracks</h2>{" "}
      </Link>
    </div>
  );
}
