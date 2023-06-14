import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.config';
import axios from 'axios';


const auth = getAuth(app);
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser);
            // jwt token: 
            if (currentUser) {
                axios.post('https://summer-camp-server-topaz.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data);
                        localStorage.setItem('access-token', data.data)
                        setLoading(false);
                    })
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }

            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

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
    const logout = () => {
        return signOut(auth)
    }

    const updateInfo = (currentUser, name, photo) => {
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const authInfo = {
        user,
        loading,
        SignUpAccount,
        SignInAccount,
        SingInGoogle,
        updateInfo,
        logout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;