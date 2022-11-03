import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/artist"> Artist </Link>
      <Link to="/album"> Album </Link>
      <Link to="/search"> Search </Link>
    </div>
  );
}
