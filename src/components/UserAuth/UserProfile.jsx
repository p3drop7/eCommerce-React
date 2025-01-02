import './UserAuth.css'

// This component is the view module to show the user data on the screen.
function UserProfile({user, logout}) {

    return (
      <section className='user-profile-container'>
        <p>Welcome <span>{user && user.name}</span></p>
        <button onClick={logout}>Log Out</button>
      </section>
    )
  }
  
  export default UserProfile