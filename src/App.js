import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';

function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const API_KEY = '523152ea7309.99921b71b91580867845'

    fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
    setCharacters(characters.filter( character => character.id !== id))
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1>Rick and Morty</h1>

        <Nav onSearch = {onSearch}/>
        <Cards 
        onClose = {onClose}
        characters = {characters}
        />
    </div>
  )
}

export default App
