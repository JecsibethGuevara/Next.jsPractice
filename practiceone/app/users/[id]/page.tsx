'use client'
import GlobalContext from "@/app/context/GlobalContext"
import Link from "next/link"
import { useContext } from "react"
import { Route, Redirect } from "next"
import useGlobal from "@/app/hooks/useGlobal"


const getUserDetails  = async (id: number) =>{
  console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

const page = async ({params}: { params: { id: number } } ) => {
  const {userAuth} = useGlobal()
  const user = await getUserDetails(params.id)
  return (
    <>
    {      
      userAuth ? 
        <>
          <h1>{user.first_name} {user.last_name}</h1>
          <img src={user.avatar} alt="" />
          <Link href={user.email}> {user.email}</Link>
        </>
       : 
          <>
            <h1>NOT AUTHENTICATED</h1>
          </>
      
    }
  </>
  )
}

export default page