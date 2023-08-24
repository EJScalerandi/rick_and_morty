import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
// import characters from './data.js';
// import Card from './components/Card/Card';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favortes';

// const example = {
//   name: 'Morty Messi',
//   species: 'Human',
//   gender: 'Male',
//   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };

function App () {
  //aqui va mi cerebroooooo
  let [characters, setCharacters] = useState([]);
  let [access, setAccess] = useState(false);
  const navigate = useNavigate();

  let userName = 'teten08@hotmail.com';
  let userPassword = 'batman1';

  function login(userData) {
    if (userData.password === userPassword && userData.username === userName) {
       setAccess(true);
       navigate('/home');
    }
    else{
      alert("Proporciona la info correcta")
    }
  }

  const location = useLocation();

  const onSearch = (value) =>{
    // setCharacters([...characters, example]);
    //se debe cambiar cuando sea de verdad
    fetch(`https://rickandmortyapi.com/api/character/${value}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const handleOnClose = (id) => {
    setCharacters((oldChars)=> oldChars.filter((ch)=>ch.id !== +id));
  };

  let myStyle = { padding: '25px' };
  return (
    <div className='App' style={myStyle}>
      <div>
      { location.pathname !== "/" ? <Nav onSearch={onSearch} /> : undefined}
        {/* <Nav onSearch={onSearch} /> */}
      </div>
      <hr />
      <Routes>
        {/* RUTA LOGIN */}
        <Route path='/' element={<Form login={login}/>} />

        {/* RUTA HOME */}
        <Route path='/home' element={
          <Cards
            characters={characters}
            onClose={handleOnClose}
          />
        }/>
        {/* RUTA ABOUT */}
        <Route path='/about' element={<About/>} />

        {/* RUTA DETAIL */}
        <Route path='/Favorites' element={<Favorites />} />

      </Routes>
      <div>
      </div>
    </div>
  )
}

export default App
