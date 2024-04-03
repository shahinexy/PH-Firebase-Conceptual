import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const AuthProvaider = ({children}) => {
    const createUser = (email, pass) =>{
        return 'hello'
    }
    return (
        <div>
            <AuthContext.Provider value={'shain'}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvaider.propTypes ={
    children: PropTypes.node
}
export default AuthProvaider;