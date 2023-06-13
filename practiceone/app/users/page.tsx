import List from "@/components/List"
import { use } from "react"
const fetchUsers = async () =>{
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

const page = async() => {
  const users = await fetchUsers()
  return (
    <>
      <List users={users}></List>
    </>
  )
}

export default page