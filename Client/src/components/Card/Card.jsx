import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";
import styles from "./Card.module.css";

let Card = ({name, species, gender, image, onClose, id, origin}) =>{
   let dispatch = useDispatch();
   let miFav = useSelector(state => state.myFavorite);
   let [ isFav, setIsFav ] = useState(false);

   useEffect(() => {
      miFav.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [miFav]);

   const handleFavorite = ()=>{
      if (isFav) {
         dispatch(removeFav(id));
         setIsFav(false);
      }else{
         let myNewChar = {
            id,
            name,
            species,
            gender,
            image
         }
         dispatch(addFav(myNewChar));
         setIsFav(true);
      }
   }


   return(
      <div>
         {
            isFav ? ( <button onClick={handleFavorite}>❤️</button>) 
            : ( <button onClick={handleFavorite}>🤍</button>)
         }
         {
            onClose ? <button onClick={()=>onClose(id)}>X</button> : null
         }
         
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2> <p>{id}</p>
         </Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>
         {
            origin ? <h2>{origin.name}</h2> : null
         }
         
         <img  src={image} alt="" />
      </div>
   );
}

export default Card;

