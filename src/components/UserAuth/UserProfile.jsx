import './UserAuth.css'

function UserProfile({user, logout}) {

    return (
      <section className='user-profile-container'>
        <p>Welcome <span>{user.userName}</span></p>
        <button onClick={logout}>Log Out</button>
      </section>
    )
  }
  
  export default UserProfile