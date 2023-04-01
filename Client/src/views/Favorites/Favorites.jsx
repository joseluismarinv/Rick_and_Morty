import "./Favorites.css";
import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanFavorites,
  filterCards,
  orderCards,
} from "../../redux/actions/actions";
import { getFavorites } from "../../redux/actions/actions";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(() => {
    dispatch(cleanFavorites());
    dispatch(getFavorites());
  }, [dispatch]);

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <div>
        <select onChange={handlerOrder}>
          <option selected disabled="disabled">
            Order By
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>

      <div>
        <select onChange={handlerFilter}>
          <option selected disabled="disabled">
            Filter By
          </option>
          <option value="All Characters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="contenedor__favorites">
        {myFavorites.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              image={image}
              name={name}
              species={species}
              gender={gender}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
