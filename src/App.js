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


const App = () => {
  const {signIn} = useContext(context);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<Protected signIn={signIn}><AdminRole></AdminRole></Protected>}></Route>
        <Route path='/faculty' element={<ProtectedFaculty signIn={signIn}><FacultyRole></FacultyRole></ProtectedFaculty>}></Route>
        {/* <Route path='/faculty' element={<Protected signIn={signIn}><FacultyRole></FacultyRole></Protected>}></Route> */}
        <Route path='/student' element={<ProtectedStudent signIn={signIn}><StudentRole></StudentRole></ProtectedStudent>}></Route>
        
        {/* <Route path='/student' element={<Protected signIn={signIn}><StudentRole></StudentRole></Protected>}></Route> */}
      </Routes>
    </div>
  )
}

export default App;