import Link from "next/link"
import {Nav} from '../styles/navigationStyles'

const Navigation = () => {
  return (
    <Nav>
        <ul>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/response">Response</Link>
            <Link href="/users">Users</Link>
        </ul>
    </Nav>
  )
}

export default Navigation