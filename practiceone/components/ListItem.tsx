'use client'
import {Li} from '../styles/listStyles'

const ListItem = (props: { id: string, first_name: string }) => {
  console.log(props.id) 
  return (
    <>
        <Li>{props.id} {props.first_name}</Li>
    </>
  )
}

export default ListItem