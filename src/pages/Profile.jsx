import React from 'react'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {auth} from '../Firebase'
import NavComp from '../Components/NavComp'
import './Profile.css'
function Profile() {
    let navigate=useNavigate()
  const signOu = () => {
    signOut(auth).then(()=> {
        localStorage.clear()
        navigate("/")
    })
  }
  return (
    <>
    <NavComp />
      <div className="profile d-flex align-center jcc dc">
        <h1>Welcome Aboard</h1>
        <p>Start fetching your next Job</p>
        <p>Coming Soon</p>
        <button onClick={signOu} className='logoutButton'>Sign Out</button>
      </div>

      
    </>
  )
}

export default Profile
