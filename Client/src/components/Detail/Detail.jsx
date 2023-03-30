import { Link } from "react-router-dom";
import useCharacter from "../../hooks/useCharacter";


const Detail = () => {
  const character = useCharacter();

  return (
    <div>
      {character.name ? (
        <>
          <button>
            <Link to="/home">Volver</Link>
          </button>
          <h2>{character.name}</h2>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.origin?.name}</p>
          <img src={character.image} alt="img" />
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Detail;
