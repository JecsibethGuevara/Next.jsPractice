"use client"
import {Input, Form} from '../styles/loginstyles'
import useGlobal from '../app/hooks/useGlobal'
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { create } from 'domain';




const LoginForm = () => {
  const router =  useRouter()
  const {handleAuth, createUser} = useGlobal()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginAuth = () =>{
    console.log(username, password)
    createUser(username, password)
    handleAuth()
    router.push('/users')
  }

 
  

  return (
    <Form onSubmit={loginAuth} method="post">
        <h1> HELLO </h1>
        <Input type="text" name="username" id="username" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setUsername(e.target.value) } />
        <Input type="password" name="password" id="password" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value) } />
        <input type="submit" value="Submit" />
    </Form>
  )
}

export default LoginForm