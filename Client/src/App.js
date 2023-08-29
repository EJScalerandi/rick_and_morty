import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favortes';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const userName = 'teten08@hotmail.com';
  const userPassword = 'batman123';

  function login(userData) {
    if (userData.password === userPassword && userData.username === userName) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('Proporciona la información correcta');
    }
  }

  const location = useLocation();

  const onSearch = (id) => { // Pasa detailId como parámetro
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  };

  const handleOnClose = (id) => {
    setCharacters((oldChars) => oldChars.filter((ch) => ch.id !== +id));
  };

  const myStyle = { padding: '25px' };

  return (
    <div className="App" style={myStyle}>
      <div>
        {location.pathname !== '/' ? <Nav onSearch={onSearch} /> : undefined}
      </div>
      <hr />
      <Routes>
        {/* RUTA LOGIN */}
        <Route path="/" element={<Form login={login} />} />

        {/* RUTA HOME */}
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={handleOnClose} />}
        />
        {/* RUTA ABOUT */}
        <Route path="/about" element={<About />} />

        {/* RUTA DETAIL */}
        <Route path="/Favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
