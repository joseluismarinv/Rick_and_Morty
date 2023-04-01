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
    <div>
      <button onClick={() => onSearch(randomCard)}>Random Card</button>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(character)}>
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-search"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
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
  );
}
