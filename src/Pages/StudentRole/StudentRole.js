import React from 'react'

const StudentRole = () => {
  const logOut = () => {
    localStorage.removeItem("role");
    window.location.reload();
  }
  return (
    <div><h1>Student Role</h1>
    <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default StudentRole;