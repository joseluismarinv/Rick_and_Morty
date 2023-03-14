import './App.css';
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { useLocation, useNavigate} from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App () {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  
  const username = 'jlm_v1@outlook.com';
  const password = 'jlm123';

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const onSearch = (character) => {
    const URL_BASE = 'https://be-a-rym.up.railway.app/api';
    const API_KEY = '523152ea7309.99921b71b91580867845';

    if(characters.find((char) => char.id === character)){
      return alert("El personaje ya está agregado")
    }

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
      {location.pathname !== '/' && <Nav onSearch = {onSearch}/>} 
      <h1>Rick and Morty</h1>
        <Routes>
          <Route path='/' element={<Form login = {login}/>}/>
          <Route path='/home' element={<Cards 
            onClose = {onClose}
            characters = {characters}
            />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
       
        </Routes>
    </div>
  )
}

export default App
