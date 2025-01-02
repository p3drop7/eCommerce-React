import { useState } from "react"

/* 
This component is used to manage the registration form to add an user to Firebase.
It uses the "register" funtion form UserContext.jsx.
*/
function UserRegistration({register, setRegistrationVisibility}) {

    // States used to store the username, email and password.
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    // This state is used to show a warning message on the form if any field is left empty.
    const [isEmpty, setIsEmpty] = useState(false)

    // This function is used to handle the user info and triggers the "register" funtion to save the user in Firebase.
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

  // The form watches the email, username and password inputs with the onChange events and saves them in the component states.
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

export default UserRegistration