import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineFileAdd} from "react-icons/ai";
import { FeedbackContext } from '../../../Context/Context';
import FeedbackPage from './FeedbackPage';

const SubmitFeedback = () => {
  const {getStudentCourses, studentEnrolledCourse, isClicked, setIsClicked} = useContext(FeedbackContext);
  const [facultyAddress, setFacultyAddress] = useState("");
  const [courseCodeState, setCourseCodeState] = useState("");
  
  const openFeedback = (to, courseCode) => {
    setIsClicked(true); //TODO: set isclicked to context api for close component is feedback submitted.
    setFacultyAddress(to);
    setCourseCodeState(courseCode);
  }
  useEffect(()=>{
    getStudentCourses();
  },[])
  return (
    <div className='bg-[#F5F5F5] min-h-screen h-auto'>
    <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><AiOutlineFileAdd className='ml-5 mr-3 w-6 h-6'/>Submit Feedback</p>
    <p className='w-2/5 text-center text-[#b56a00] text-md  py-3 border-l-8 border-[#F0AD4E]  mb-8 bg-[#F4EEE4] rounded-md mx-auto'><b className="font-bold info-size">Info: </b>Please Fill up the form below correctly to give feedback. </p>
    <div>
       <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto flex justify-center">
      <div
        className="inline-block w-3/4 shadow-md rounded-lg overflow-hidden"
      >
        <table className=" w-full leading-normal">
          <thead>
            <tr>
              <th
                className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Course Code
              </th>
              <th
                className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Title
              </th>
              <th
                className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Faculty
              </th>
              <th
                className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                studentEnrolledCourse?.map(course => <tr>
                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <div className="flex-shrink-0 w-10 h-10">
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                     {course?.courseCode}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{course?.courseTitle}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{course?.faculty}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">
                  {
                    localStorage.getItem(course.courseCode) ?  <button className='btn font-semibold leading-tight rounded-full bg-gray-200 text-gray-00 px-4 py-2 ' disabled>Completed</button> : <button className='btn font-semibold leading-tight rounded-full bg-red-200 text-red-900 px-4 py-2 ' onClick={()=>{openFeedback(course.facultyAddress, course.courseCode)}}>Give Feedback</button> 
                  }
                </p>
              </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    {
      isClicked && <FeedbackPage facultyAddress={facultyAddress} courseCodeState={courseCodeState}></FeedbackPage>
    }
</div>
</div>
  )
}

export default SubmitFeedback;