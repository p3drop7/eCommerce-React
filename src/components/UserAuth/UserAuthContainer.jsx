import React, { useContext } from 'react'
import UserLogIn from './UserLogIn'
import './UserAuth.css'
import { UserContext } from '../../context/UserContext'
import UserProfile from './UserProfile'

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