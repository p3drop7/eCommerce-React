import React, { useState } from 'react'
import './UserAuth.css'

function UserLogIn({login, user}) {

  const [userName, setUserName] = useState("")
  const [passValue, setPassValue] = useState("")

  const handleClick =(event)=> {
    event.preventDefault()
    const userData = {
      userNameData: userName.target.value, 
      userPassData: passValue.target.value
    }
    
    login(userData)
  }

  return (
    <section className='log-in-form-container'>
      <form className='logIn-form' action="#">
        <h2>Log In</h2>
          <div>
              <label htmlFor="email">User Name</label>
              <input type="text" name='userName' onChange={setUserName}/>
          </div>
          <div>
              <label htmlFor="password">Password</label>
              <input type="text" name='password' onChange={setPassValue}/>
          </div>
          {
            (user === "Incorrect Pasword" || user === "User not registered")
              ? <p className='error-credentials'>{user}</p>
              : null
          }
          <button className='login-submit' type='submit' onClick={handleClick}>Log In</button>
      </form>
    </section>
  )
}

export default UserLogIn