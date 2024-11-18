import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import UserLogIn from './UserLogIn'
import UserProfile from './UserProfile'
import './UserAuth.css'
import UserResgistration from './UserResgistration'

function UserAuthContainer() {

  const {user, login, logout, register}  = useContext(UserContext)
  const [registrationVisibility, setRegistrationVisibility] = useState(false)
  
  return (
    <>
      { 
        ( (user === null || user === undefined || user === "Incorrect Pasword" || user === "User not registered" || user === "Please write your user and password") && registrationVisibility === false)
        ? <UserLogIn login={login} user={user} setRegistrationVisibility={setRegistrationVisibility}/>
        : <UserProfile user={user} logout={logout}/>
      }
      {
        registrationVisibility === true && <UserResgistration register={register} setRegistrationVisibility={setRegistrationVisibility}/>
      }
    </>
  )
}

export default UserAuthContainer