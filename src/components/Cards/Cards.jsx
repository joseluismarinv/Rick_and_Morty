import Card from '../Card/Card';
import style from './Cards.module.css';
import { Link } from 'react-router-dom';

export default function Cards({characters, onClose}) {
   return (
   <div className={style.cardsContainers}>
      {
         characters.map(({name, species, gender, image, id})=>{
            return (
               <Link to={`/detail/${id}`}>
                  <Card
                  key={id}
                  image={image}
                  name={name}
                  species={species}
                  gender={gender}
                  onClose={()=>onClose(id)}
                  />
               </Link>
            )
         })
      }
   </div>
   )
}
