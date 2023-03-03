import React from 'react'

const FacultyRole = () => {
  const logOut = () => {
    localStorage.removeItem("role");
    window.location.reload();
  }
  return (
    <div><h1>Faculty Role</h1>
    <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default FacultyRole;