'use client'
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [user, setUser] = useState({});
    
    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}



export {
    GlobalProvider
}

export default GlobalContext;