'use client'
import {Li} from '../styles/listStyles'
import { useRouter } from 'next/navigation'


const ListItem = (props: { user: { id : string, first_name : string, email: string, avatar: string }}) => {
  
const user = props.user  
const router = useRouter()
  return (
    <>
        <Li onClick={()=>{router.push(`/users/${user.id}`)}}>{user.id} {user.first_name}</Li>
    </>
  )
}

export default ListItem