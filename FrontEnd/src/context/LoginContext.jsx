import { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [login, setlogin] = useState({legajo: null, nombre:null, id_usuario:null});

    const addLogin = (data) => {
        setlogin(data);  
    }
    const signOut = () => {
        setlogin({});  
    }

    return (
        <LoginContext.Provider value={{addLogin,signOut,login }}>
            { children }
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;