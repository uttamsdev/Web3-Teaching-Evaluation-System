import React from 'react'

const AdminRole = () => {

  const logOut = () => {
    localStorage.removeItem("role");
    window.location.reload();
  }
  return (
    <div>
      <h1>Admin Role</h1>
      <button onClick={logOut}>LogOut</button>
    </div>
  )
}

export default AdminRole;