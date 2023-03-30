import './Card.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import axios from 'axios';

const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  deleteFavorite,
  myFavorites
}) => {
  const [isFav, setIsFav] = useState(false);

  const addFavorite = (character) => {
    axios.post('http:localhost:3001/rickandmorty/fav', character)
    .then((res) => console.log('ok'))
  }
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
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
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className="card">
      <div className="card__botones">
        <button onClick={onClose}>X</button>
        {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )
        }
      </div>
        
        <Link to={`/detail/${id}`}>
          <h2 className="card__nombre">{name}</h2>
        </Link>
      <div className="card__imagen">
        <img src={image} alt={`Imagen de ${name}`}/>
      </div>    
      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
