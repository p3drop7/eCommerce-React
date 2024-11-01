import React from 'react'
import './UserAuth.css'

function UserLogIn() {
  return (
    <form className='logIn-form' action="#">
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' />
        </div>
        <button className='login-submit' type='submit'>Log In</button>
    </form>
  )
}

export default UserLogIn