"use client"
import {Input, Form} from '../styles/loginstyles'
import useGlobal from '../app/hooks/useGlobal'
import { useState } from 'react';





const LoginForm = () => {
    const [formData, setFormData] = useState(false);
  
    const {user, setUser} = useGlobal()
    setUser({
      user: 'hi',
      password: 'bts'
    })
    

    const printData = () => {
      
      console.log(user)
      return{
        user
      }
    }


  return (
    <Form onSubmit={printData} method="post">
        <h1> HELLO </h1>
        <Input type="text" name="username" id="username" />
        <Input type="password" name="password" id="password" />
        <input type="submit" value="Submit" />
    </Form>
  )
}

export default LoginForm