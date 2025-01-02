import React, { useState } from 'react'
import './UserAuth.css'

/* 
This component manages login.
It pulls the data from the prop "user" and the login funtion from the user context.
*/
function UserLogIn({login, user, setRegistrationVisibility}) {

  // States used to save the username and password from the login form.
  const [userName, setUserName] = useState(null)
  const [passValue, setPassValue] = useState(null)

  // This funtion handles the information when the submit button is clicked and triggers the login funtion.
  const handleClick =(event)=> {
    event.preventDefault()
    if(userName === null || passValue === null){
      const userData = {
        userNameData: "", 
        userPassData: ""
      }
      login(userData)
    } else {
      const userData = {
        userNameData: userName.target.value, 
        userPassData: passValue.target.value
      }
      login(userData)
    }
  }

  // This is the login form which watches and saves the userName and password inputs with the onChange event in the component states.
  return (
    <section className='log-in-form-container'>
      <form className='logIn-form' action="#">
        <h2>Log In</h2>
          <div>
              <label htmlFor="userName">User Name</label>
              <input type="text" name='userName' onChange={setUserName}/>
          </div>
          <div>
              <label htmlFor="password">Password</label>
              <input type="text" name='password' onChange={setPassValue}/>
          </div>
          {
            (user === "Incorrect Pasword" || user === "User not registered" || user === "Please write your user and password")
              ? <p className='error-credentials'>{user}</p>
              : null
          }

          <button className='login-submit' type='submit' onClick={handleClick}>Log In</button>
          <button className="register-button" onClick={()=> setRegistrationVisibility(true)}>Register</button>
      </form>
    </section>
  )
}

export default UserLogIn