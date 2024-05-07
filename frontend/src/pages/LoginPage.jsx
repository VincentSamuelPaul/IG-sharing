import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import '../styles/main.css';
import { GoogleButton } from "react-google-button";

const LoginPage = () => {

    const {loginUser, logout} = useContext(AuthContext);

    return (
        <div className='container'>
            <GoogleButton onClick={() => loginUser()}/>
        </div>
    )
}

export default LoginPage