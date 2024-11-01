import React, { useState } from 'react'
import './UserAuth.css'

function UserLogIn({login}) {

  const [userName, setUserName] = useState("")
  const [passValue, setPassValue] = useState("")

  const handleClick =(event)=> {
    event.preventDefault()
    const userData = {userNameData: userName.target.value, userPassData: passValue.target.value}
    login(userData)
  }

    /*
  useEffect(() => {
    if (userName) console.log(userName.target.value)
      if (passValue) console.log(passValue.target.value)
  }, [userName, passValue])
  */

  return (
    <form className='logIn-form' action="#">
        <div>
            <label htmlFor="email">User Name</label>
            <input type="text" name='userName' onChange={setUserName}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" name='password' onChange={setPassValue}/>
        </div>
        <button className='login-submit' type='submit' onClick={handleClick}>Log In</button>
    </form>
  )
}

export default UserLogIn