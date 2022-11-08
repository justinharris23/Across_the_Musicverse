import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        {" "}
        <h2 className="homeLink">Home</h2>{" "}
      </Link>
      <Link to="/search">
        {" "}
        <h2 className="searchLink">Search</h2>{" "}
      </Link>
    </div>
  );
}
