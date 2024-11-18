import { useState } from "react"

function UserResgistration({register, setRegistrationVisibility}) {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [isEmpty, setIsEmpty] = useState(false)

    const handleClick =(event) => {
      event.preventDefault()
        if(userName === "" || email === "" || pass === ""){
            setIsEmpty(true)
        }else{
            register({
                name: userName.target.value,
                email: email.target.value,
                pass: pass.target.value
            })
            setIsEmpty(false)
            setRegistrationVisibility(false)
        }
    }

  return (
    <section className='register-form-container'>
      <form className='register-form' action="#">
        <h2>Registration</h2>
          <div>
              <label htmlFor="email">Email</label>
              <input type="text" name='email' onChange={setEmail}/>
          </div>
          <div>
              <label htmlFor="userName">User Name</label>
              <input type="text" name='userName' onChange={setUserName}/>
          </div>
          <div>
              <label htmlFor="password">Password</label>
              <input type="text" name='password' onChange={setPass}/>
          </div>
        { isEmpty === true && <p className="registration-error-message">Please fill up all fields</p> }
        <button className='registration-submit' type='submit' onClick={handleClick}>Register</button>
        <button className='registration-goBack' onClick={()=> setRegistrationVisibility(false)}>Log in</button>
      </form>
    </section>
  )
}

export default UserResgistration