import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProtectedAdmin from './Pages/ProtectedRoute/ProtectedAdmin';
import ProtectedFaculty from './Pages/ProtectedRoute/ProtectedFaculty';
import ProtectedStudent from './Pages/ProtectedRoute/ProtectedStudent';
import AdminLayout from './Pages/Roles/AdminRole/Layout/AdminLayout';
import AdminDashboard from './Pages/Roles/AdminRole/components/AdminDashboard';
import Billing from './Pages/Roles/AdminRole/components/Billinig';
import Account from './Pages/Roles/AdminRole/components/Account';
import StudentLayout from './Pages/Roles/StudentRole/Layout/StudentLayout';
import StudentDashboard from './Pages/Roles/StudentRole/components/StudentDashboard';
import StudentAccount from './Pages/Roles/StudentRole/components/StudentAccount';
import FacultyLayout from './Pages/Roles/FacultyRole/Layout/FacultyLayout';
import FacultyDashboard from './Pages/Roles/FacultyRole/components/FacultyDashboard';
import FacultyAccount from './Pages/Roles/FacultyRole/components/FacultyAccount';
import { FeedbackContext } from './Pages/Context/Context';
import NotFound from './Pages/Shared/NotFound';


const App = () => {
  const {signIn} = useContext(FeedbackContext);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<ProtectedAdmin signIn={signIn}><AdminLayout><AdminDashboard></AdminDashboard></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/admin/billing' element={<ProtectedAdmin signIn={signIn}><AdminLayout><Billing></Billing></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/admin/account' element={<ProtectedAdmin signIn={signIn}><AdminLayout><Account></Account></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/faculty' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><FacultyDashboard></FacultyDashboard></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/faculty/account' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><FacultyAccount></FacultyAccount></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/student' element={<ProtectedStudent signIn={signIn}><StudentLayout><StudentDashboard></StudentDashboard></StudentLayout></ProtectedStudent>}></Route>
        <Route path='/student/account' element={<ProtectedStudent signIn={signIn}><StudentLayout><StudentAccount></StudentAccount></StudentLayout></ProtectedStudent>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App;