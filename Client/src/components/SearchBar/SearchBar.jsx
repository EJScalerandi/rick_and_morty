import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
   let [character, setCharacter] = useState('');

   const handleChange = (e)=>{
      setCharacter(e.target.value);
   };

   return (
      <div className={styles.div}>
         <input className={styles.input} type='search' onChange={handleChange} />
         <button className={styles.btn} onClick={()=>{onSearch(character)}}>Agregar</button>
      </div>
   );
}
