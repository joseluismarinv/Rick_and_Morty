import Card from '../Card/Card';
import style from './Cards.module.css';


export default function Cards({characters, onClose}) {
   return (
   <div className={style.cardsContainers}>
      {
         characters.map(({name, species, gender, image, id})=>{
            return (
               <Card
               image={image}
               name={name}
               species={species}
               gender={gender}
               onClose={()=>onClose(id)}
               />
            )
         })
      }
   </div>
   )
}
