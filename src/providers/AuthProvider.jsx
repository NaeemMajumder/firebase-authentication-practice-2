import React, { createContext } from 'react';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    console.log(children);

    let name = "Naeem majumder";

    return (
        <AuthContext.Provider value={name}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;