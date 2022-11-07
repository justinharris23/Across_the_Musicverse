import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <h2>Home</h2>{" "}
      </Link>
      <Link to="/search">
        {" "}
        <h2>Search</h2>{" "}
      </Link>
    </div>
  );
}
