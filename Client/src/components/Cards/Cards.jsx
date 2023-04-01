import "./Cards.css";
import Card from "../Card/Card";
import videoLogin from "../../assets/videos/Rick-And-Morty-Schwifty-Live-Wallpaper.mp4";

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

      <video autoPlay loop muted>
        <source src={videoLogin} type="video/mp4" />
      </video>
    </div>
  );
}
