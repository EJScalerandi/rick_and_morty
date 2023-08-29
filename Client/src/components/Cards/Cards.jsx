import Card from '../Card/Card';
import styles from './Cards.module.css';



export default function Cards({characters, onClose}) {

   return <div className={styles.div}>
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

