import './UserAuth.css'

function UserProfile({user, logout, login}) {

    return (
      <section className='user-profile-container'>
        <p>Welcome <span>{user}</span></p>
        <button onClick={logout}>Log Out</button>
      </section>
    )
  }
  
  export default UserProfile