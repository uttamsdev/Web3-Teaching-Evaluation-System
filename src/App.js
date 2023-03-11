import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProtectedAdmin from './Pages/ProtectedRoute/ProtectedAdmin';
import ProtectedFaculty from './Pages/ProtectedRoute/ProtectedFaculty';
import ProtectedStudent from './Pages/ProtectedRoute/ProtectedStudent';
import AdminLayout from './Pages/Roles/AdminRole/Layout/AdminLayout';
import AdminDashboard from './Pages/Roles/AdminRole/components/AdminDashboard';
// import Billing from './Pages/Roles/AdminRole/components/Billinig';

import Account from './Pages/Roles/AdminRole/components/Account';
import StudentLayout from './Pages/Roles/StudentRole/Layout/StudentLayout';
import StudentDashboard from './Pages/Roles/StudentRole/components/StudentDashboard';
// import ViewFeedbacks from './Pages/Roles/FacultyRole/components/ViewFeedbacks';
// import StudentAccount from './Pages/Roles/StudentRole/components/StudentAccount';
import FacultyLayout from './Pages/Roles/FacultyRole/Layout/FacultyLayout';
import FacultyDashboard from './Pages/Roles/FacultyRole/components/FacultyDashboard';
// import FacultyAccount from './Pages/Roles/FacultyRole/components/FacultyAccount';
import ViewFeedbacks from './Pages/Roles/FacultyRole/components/ViewFeedbacks';
import { FeedbackContext } from './Pages/Context/Context';
import NotFound from './Pages/Shared/NotFound';
import ViewAllFeedbacks from './Pages/Roles/AdminRole/components/ViewAllFeedbacks';
import SubmitFeedback from './Pages/Roles/StudentRole/components/SubmitFeedback';
import CourseEnroll from './Pages/Roles/StudentRole/components/CourseEnroll';
import AddCourses from './Pages/Roles/AdminRole/components/AddCourses';
import AllCourses from './Pages/Roles/AdminRole/components/AllCourses';
import FacultyCourses from './Pages/Roles/FacultyRole/components/FacultyCourses';
import StudentCourses from './Pages/Roles/StudentRole/components/StudentCourses';
import ViewFacultyFeedbacks from './Pages/Roles/FacultyRole/components/ViewFeedbacks';


const App = () => {
  const {signIn} = useContext(FeedbackContext);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<ProtectedAdmin signIn={signIn}><AdminLayout><AdminDashboard></AdminDashboard></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/admin/view-all-feedbacks' element={<ProtectedAdmin signIn={signIn}><AdminLayout><ViewAllFeedbacks></ViewAllFeedbacks></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/admin/create-account' element={<ProtectedAdmin signIn={signIn}><AdminLayout><Account></Account></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/admin/add-courses' element={<ProtectedAdmin signIn={signIn}><AdminLayout><AddCourses></AddCourses></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/admin/all-courses' element={<ProtectedAdmin signIn={signIn}><AdminLayout><AllCourses></AllCourses></AdminLayout></ProtectedAdmin>}></Route>
        <Route path='/faculty' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><FacultyDashboard></FacultyDashboard></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/faculty/view-feedbacks' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><ViewFacultyFeedbacks></ViewFacultyFeedbacks></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/faculty/view-courses' element={<ProtectedFaculty signIn={signIn}><FacultyLayout><FacultyCourses></FacultyCourses></FacultyLayout></ProtectedFaculty>}></Route>
        <Route path='/student' element={<ProtectedStudent signIn={signIn}><StudentLayout><StudentDashboard></StudentDashboard></StudentLayout></ProtectedStudent>}></Route>
        <Route path='/student/submit-feedback' element={<ProtectedStudent signIn={signIn}><StudentLayout><SubmitFeedback></SubmitFeedback></StudentLayout></ProtectedStudent>}></Route>
        <Route path='/student/course-enroll' element={<ProtectedStudent signIn={signIn}><StudentLayout><CourseEnroll></CourseEnroll></StudentLayout></ProtectedStudent>}></Route>
        <Route path='/student/student-courses' element={<ProtectedStudent signIn={signIn}><StudentLayout><StudentCourses></StudentCourses></StudentLayout></ProtectedStudent>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  )
}

export default App;