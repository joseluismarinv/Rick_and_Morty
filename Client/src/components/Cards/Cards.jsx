import "./Cards.css";
import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  return (
    <div className="contenedor__cards">
      {characters.map(({ id, name, species, gender, image }) => (
        <Card
          key={id}
          id={id}
          image={image}
          name={name}
          species={species}
          gender={gender}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}
