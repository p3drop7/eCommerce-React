import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import UserLogIn from './UserLogIn'
import UserProfile from './UserProfile'
import './UserAuth.css'

function UserAuthContainer() {

  const {user, login, logout}  = useContext(UserContext)

  return (
    <>
      { 
        ( user === null || user === undefined || user === "Incorrect Pasword" || user === "User not registered")
        ? <UserLogIn login={login} user={user}/>
        : <UserProfile user={user} logout={logout} login={login}/>
      }
    </>
  )
}

export default UserAuthContainer