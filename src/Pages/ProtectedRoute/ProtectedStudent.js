import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { FeedbackContext } from '../Context/Context';
import UnAuthorized from '../Shared/UnAuthorized';
 function Protected({ signIn, wallet, children }) {
  const {currentAccount } = useContext(FeedbackContext);
 
  if (signIn != 'student') {
    localStorage.removeItem("role");
    localStorage.removeItem("wallet");
    return <Navigate to="/" replace />
  }
  if(wallet==currentAccount){
    return children;
  } else {
    return <UnAuthorized></UnAuthorized>
  }
}
export default Protected;