import Link from "next/link"
import {Nav} from '../styles/navigationStyles'
import useGlobal from '../app/hooks/useGlobal'
import { useRouter } from "next/navigation"

const Navigation = () => {
  const router = useRouter()
  const {handleLogout} = useGlobal()
  const logoutHandle = ()=>{
    handleLogout()
    router.push('/login')
  }

  return (
    <Nav>
        <ul>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/response">Response</Link>
            <Link href="/users">Users</Link>
            <a href="#" onClick={logoutHandle}> Logout</a>
        </ul>
    </Nav>
  )
}

export default Navigation