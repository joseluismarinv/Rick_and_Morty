import "./Nav.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function navigation({ onSearch }) {
  return (
    <div className="contenedor">
      <div className="navegacion">
        <h1>Rick and Morty</h1>
        <nav className="navegacion__enlaces">
          <Link to="/">Log Out</Link>

          <Link to="/home">
            <span>Home</span>
          </Link>

          <Link to="/about">
            <span>About</span>
          </Link>

          <Link to="/favorites">
            <span>Favorites</span>
          </Link>
          <SearchBar onSearch={onSearch} />
        </nav>
      </div>
    </div>
  );
}
