import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext = createContext(null);

const AuthProvaider = ({children}) => {
    // create user with email
    const createUser = (email, pass) =>{
        createUserWithEmailAndPassword(auth, email, pass)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            const errormsg = error.message
            console.log(errormsg);
        })
    }

    //sign in user
    const signInUser = (email, pass) =>{
        signInWithEmailAndPassword(auth, email, pass)
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))
    }

    const authInfo = {createUser, signInUser}
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