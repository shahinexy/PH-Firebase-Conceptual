import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()
const AuthProvaider = ({children}) => {
    const [user, setUser] = useState(null)
    // create user with email
    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    // sign in with google popup
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //sign in user
    const signInUser = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    // save user details
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // setUser(currentUser)
            if(currentUser){
                setUser(currentUser);
            }
            else{
                setUser(null)
            }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    // log out user
    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {createUser, signInUser, user, setUser, googleSignIn, logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvaider.propTypes ={
    children: PropTypes.node
}
export default AuthProvaider;