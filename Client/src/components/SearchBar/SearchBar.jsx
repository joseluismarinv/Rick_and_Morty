import "./SearchBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const max = 826;
  const [character, setCharacter] = useState("");

  const handleChange = (event) => {
    setCharacter(event.target.value);
  };

  const randomCard = Math.floor(Math.random() * (max - 1) + 1);

  return (
    <div className="navegacion__enlaces">
      <Link to="/home">
        <button
          className="navegacion__button"
          onClick={() => onSearch(randomCard)}
        >
          Random Card
        </button>
      </Link>
      <div className="navegacion__enlaces--input">
        <input
          className="navegacion__input"
          type="search"
          onChange={handleChange}
        />
        <button
          className="navegacion__button--input"
          onClick={() => onSearch(character)}
        >
          <Link to="/home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="#fff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}
