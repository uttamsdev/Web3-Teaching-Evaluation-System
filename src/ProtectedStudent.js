import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ signIn, children }) {
  if (signIn != "student") {
    localStorage.removeItem("role");
    return <Navigate to="/" replace />
  }
  return children;
}
export default Protected;