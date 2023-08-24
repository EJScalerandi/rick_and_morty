import React, { useState } from "react";

export default function SearchBar({onSearch}) {
   let [character, setCharacter] = useState('');

   const handleChange = (e)=>{
      setCharacter(e.target.value);
   };

   return (
      <div>
         <input type='search' onChange={handleChange} />
         <button onClick={()=>{onSearch(character)}}>Agregar</button>
      </div>
   );
}
