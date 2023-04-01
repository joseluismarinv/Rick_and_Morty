import "./Nav.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function navigation({ onSearch }) {
  return (
    <div className="contenedor">
      <div className="navegacion">
        <div className="navegacion__titulo--blur">
          <Link to="/home">
            <h1 className="navegacion__titulo">Rick and Morty</h1>
          </Link>
        </div>
        <nav className="navegacion__enlaces">
          <Link to="/">
            <span className="navegacion__enlace">Log Out</span>
          </Link>

          <Link to="/home">
            <span className="navegacion__enlace">Home</span>
          </Link>

          <Link to="/about">
            <span className="navegacion__enlace">About</span>
          </Link>

          <Link to="/favorites">
            <span className="navegacion__enlace">Favorites</span>
          </Link>
          <SearchBar onSearch={onSearch} />
        </nav>
      </div>
    </div>
  );
}
