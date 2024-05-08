import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const [user, setUser] = useState(() => localStorage.getItem('user') ? localStorage.getItem('user') : null);
    const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
    const [loading, setLoading] = useState(true);

    const loginUser = async() => {
        signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			setAuthToken(token);
            setUser(user.displayName);
            localStorage.setItem('authToken', JSON.stringify(credential));
            localStorage.setItem('user', String(user.displayName));
            navigate('/');
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
		});
    }

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user')
        navigate('/');
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log("Error");
        });
    }


    let contextData = {
        user: user,
        message: message,
        authToken: authToken,
        loginUser: loginUser,
        logout: logout,
    }
    
    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}