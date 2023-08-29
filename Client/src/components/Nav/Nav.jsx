import React from "react";
import SearchBar from '../SearchBar/SearchBar';
import styles from './Nav.module.css';
import { Link } from "react-router-dom";

let {nav, link} = styles;

const Nav = ({ onSearch })=>{

    return(
        <div className={nav}>
            <Link className={link} to={'/about'}>About</Link>
            <Link className={link} to={'/favorites'}>Favorites</Link>
            <Link className={link} to={'/home'}>Home</Link>
            <SearchBar onSearch={ onSearch }/>
        </div>
    );
}

export default Nav;