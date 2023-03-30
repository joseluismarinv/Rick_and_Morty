import React from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";

const Favorites = () => {
  const dipatch = useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites);

  const handlerOrder = (event) =>{
    dipatch(orderCards(event.target.value))
  }

  const hanlderFilter = (event) =>{
    dipatch(filterCards(event.target.value))
  }

  return (
    <>
      <div>
        <select onChange={handlerOrder}>
          <option selected disabled='disabled'>Order By</option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </div>

      <div>
        <select onChange={hanlderFilter}>
          <option selected disabled='disabled'>Filter By</option>
          <option value="All Characters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map(({ id,name, species, gender, image}) => {
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
    </>
  );
};

export default Favorites;
