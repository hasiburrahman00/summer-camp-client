import React, { Children, createContext, useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const SignUpAccount = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const SignInAccount = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const SingInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        user, 
        loading,
        SignUpAccount,
        SignInAccount,
        SingInGoogle

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;