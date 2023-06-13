'use client'
import useGlobal from '../hooks/useGlobal'
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

const page = () => {
  const {user} = useContext(GlobalContext)
  const showUser = () =>{
    console.log(user.user)
  }
  showUser()
  return (
    
    <div>
     
        happy bts day
    </div>
  )
}

export default page