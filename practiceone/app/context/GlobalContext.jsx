'use client'
import { createContext, useState } from "react";
import {v4 as uuid} from 'uuid'

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {

    const [userAuth, setUserAuth] = useState(false);
    const [user, setUser] = useState([])

    const handleAuth = () =>{
        setUserAuth(true)
         console.log(userAuth, 'after like')
    }

    const handleLogout = () =>{
        setUserAuth(false)
         console.log(userAuth, 'after dislike')

    }
    
    const createUser = (username, password) =>{
        console.log(user)
        const id = uuid()
        setUser([...user, {id, username, password}])
    }


 
    return (
        <GlobalContext.Provider
            value={{
                userAuth,
                setUserAuth,
                handleAuth,
                handleLogout,
                user, setUser, createUser,
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