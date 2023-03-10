import style from './Card.module.css';

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <div className={style.topName}>
            <h2 className={style.name}>{name}</h2>
            <div className={style.button}>
               <button onClick={onClose} className={style.closeButton}>X</button>
            </div>
         </div>

         <img  src={image} alt={`Imagen de ${name}`} className={style.img} />
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}
