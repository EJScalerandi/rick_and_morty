import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // Importa connect
import { addFav, removeFav } from "../../Redux/actions";

let Card = ({ name, species, gender, image, onClose, id, origin, addFav, removeFav }) => {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, origin });
      }
   }

   return (
      <div>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         {
            onClose ? <button onClick={() => onClose(id)}>X</button> : null
         }

         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         {
            origin ? <h2>{origin.name}</h2> : null
         }

         <img src={image} alt="" />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (pj) => dispatch(addFav(pj)),
      removeFav: (id) => dispatch(removeFav(id)),
   };
};

export default connect(null, mapDispatchToProps)(Card);


