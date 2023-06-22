import {getMovies} from '../../libs/movies'
import List from "@/components/List"
const fetchUsers = async () =>{
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}



const page = async() => {
  const users = await fetchUsers()
  const movies = await getMovies()
  console.log(movies)
  return (
    <>
      <List users={users}></List>
    </>
  )
}

export default page