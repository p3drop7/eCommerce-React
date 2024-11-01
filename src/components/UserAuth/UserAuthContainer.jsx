import React, { useContext } from 'react'
import UserLogIn from './UserLogIn'
import './UserAuth.css'
import { UserContext } from '../../context/UserContext'
import UserProfile from './UserProfile'

function UserAuthContainer() {

  const {user, login, logout}  = useContext(UserContext)

  return (
    <div className='auth-form'>
      <h2>AUTHENTICATION</h2>
      { user ? <UserProfile logout={logout}/> : <UserLogIn login={login} /> }
    </div>
  )
}

export default UserAuthContainer