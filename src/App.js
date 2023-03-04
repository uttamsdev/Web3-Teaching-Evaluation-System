import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminRole from './Pages/AdminRole/AdminRole';
import { context } from './Pages/Context';
import FacultyRole from './Pages/FacultyRole/FacultyRole';
import Home from './Pages/Home/Home';
import StudentRole from './Pages/StudentRole/StudentRole';
import Protected from './Protected';
import ProtectedStudent from './ProtectedStudent'
import ProtectedFaculty from './ProtectedFaculty';
import AdminLayout from './Pages/Roles/AdminRole/Layout/AdminLayout';
import Dashboard from './Pages/Roles/AdminRole/Pages/Dashboard';
import Billing from './Pages/Roles/AdminRole/Pages/Billinig';
import Account from './Pages/Roles/AdminRole/Pages/Account';
import StudentLayout from './Pages/Roles/StudentRole/Layout/StudentLayout';
import StudentDashboard from './Pages/Roles/StudentRole/Pages/StudentDashboard';
import StudentAccount from './Pages/Roles/StudentRole/Pages/StudentAccount';
import FacultyLayout from './Pages/Roles/FacultyRole/Layout/FacultyLayout';
import FacultyDashboard from './Pages/Roles/FacultyRole/Pages/FacultyDashboard';
import FacultyAccount from './Pages/Roles/FacultyRole/Pages/FacultyAccount';


const App = () => {
  const {signIn} = useContext(context);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<Protected signIn={signIn}><AdminLayout><Dashboard></Dashboard></AdminLayout></Protected>}></Route>
        <Route path='/admin/billing' element={<Protected signIn={signIn}><AdminLayout><Billing></Billing></AdminLayout></Protected>}></Route>
        <Route path='/admin/account' element={<Protected signIn={signIn}><AdminLayout><Account></Account></AdminLayout></Protected>}></Route>
        <Route path='/faculty' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><FacultyDashboard></FacultyDashboard></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/faculty/account' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><FacultyAccount></FacultyAccount></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/student' element={<ProtectedStudent signIn={signIn}><StudentLayout><StudentDashboard></StudentDashboard></StudentLayout></ProtectedStudent>}></Route>
        <Route path='/student/account' element={<ProtectedStudent signIn={signIn}><StudentLayout><StudentAccount></StudentAccount></StudentLayout></ProtectedStudent>}></Route>
        
        {/* <Route path='/student' element={<Protected signIn={signIn}><StudentRole></StudentRole></Protected>}></Route> */}
      </Routes>
    </div>
  )
}

export default App;