import "./Card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite } from "../../redux/actions/actions";
import axios from "axios";

const Card = ({ id, name, species, gender, image, onClose }) => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const addFavorite = (character) => {
    axios.post("http://localhost:3001/rickandmorty/fav", character);
  };

  const handleFavorite = () => {
    if (isFav) {
      dispatch(deleteFavorite(id));
      setIsFav(false);
    } else {
      setIsFav(true);
      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [favorites]);

  return (
    <div className="card">
      <div className="card__botones">
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button onClick={onClose}>X</button>
      </div>

      <Link to={`/detail/${id}`}>
        <h2 className="card__nombre">{name}</h2>
      </Link>
      <div className="card__imagen">
        <img src={image} alt={`Imagen de ${name}`} />
      </div>
      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
};

export default Card;
