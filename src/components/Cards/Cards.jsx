import Card from '../Card/Card';
import styles from './Cards.module.css';

let { background } = styles;

export default function Cards({characters, onClose}) {

   return <div className={background}>
      {
         characters.map(({id, name, species, gender, image}) => 
         <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            origin={false}
         />)
      }
   </div>;
}

