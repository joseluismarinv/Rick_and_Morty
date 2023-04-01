import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Form from "./views/Form/Form";
import Nav from "./views/Nav/Nav.jsx";
import About from "./views/About/About";
import Favorites from "./views/Favorites/Favorites.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const username = "jlm@mail.com";
  const password = "jlm123";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("El usuario o contraseña son incorrectos");
    }
  };

  useEffect(() => {
    !access && navigate("/home");
  }, [access]);

  const onSearch = (character) => {
    const URL_BASE = "http://localhost:3001";
    //  const API_KEY = "523152ea7309.99921b71b91580867845";

    if (characters.find((char) => char.id === character)) {
      return alert("El personaje ya está agregado");
    }

    fetch(`${URL_BASE}/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
