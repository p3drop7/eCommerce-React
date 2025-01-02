import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import UserLogIn from './UserLogIn'
import UserProfile from './UserProfile'
import UserRegistration from './UserRegistration'
import './UserAuth.css'

/*
This component acts as the controller for the user authentication (log in, registration, user profile, etc.)
It is a contaner that manages the UserLogIn.jsx, UserProfile.jsx and UserRegistration.jsx components.
*/
function UserAuthContainer() {

  // The user data is handled, stored and pulled with the UserContext.jsx state and funtions, which is saved in Firebase.
  const {user, login, logout, register}  = useContext(UserContext)

  // This state handles the visibilitaty for the user registration screen.
  const [registrationVisibility, setRegistrationVisibility] = useState(false)
  
  return (
    <>
      { 
        ( (user === null || user === undefined || user === "Incorrect Pasword" || user === "User not registered" || user === "Please write your user and password") && registrationVisibility === false)
        ? <UserLogIn login={login} user={user} setRegistrationVisibility={setRegistrationVisibility}/>
        : <UserProfile user={user} logout={logout}/>
      }
      {
        registrationVisibility === true && <UserRegistration register={register} setRegistrationVisibility={setRegistrationVisibility}/>
      }
    </>
  )
}

export default UserAuthContainer