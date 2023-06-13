'use client'
import {Li} from '../styles/listStyles'

const ListItem = (props: { id: string }) => {
  console.log(props.id) 
  return (
    <>
        <li>{props.id}</li>
    </>
  )
}

export default ListItem