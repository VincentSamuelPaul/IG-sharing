import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import "../styles/Navbar.css";
import logo from "../assets/logo192.png"; 

const Header = () => {

    let { user, logout } = useContext(AuthContext);
    

    return (
        <div className='header'>
            <div className='navbar'>
                <h3>F I I G</h3>
                <img src={logo} onClick={() => logout()} alt="logo"/>
            </div>
        </div>
    )
}

export default Header