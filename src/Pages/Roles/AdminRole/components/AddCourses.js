import React, { useContext } from 'react'
import {VscGitPullRequestCreate} from "react-icons/vsc"
import { FeedbackContext } from '../../../Context/Context'
import Loader from '../../../Shared/Loader';

const AddCourses = () => {
    const  {courseAddHandleChange, addCourseData, AddCourse, isLoading} = useContext(FeedbackContext);

    const handleAddCourse = async(event) => {
        const {facultyAddress, facultyName, courseCode, courseTitle} = addCourseData;
        event.preventDefault();

        if(!facultyAddress || !facultyName || !courseCode || !courseTitle) return; 
        AddCourse();

    }
    return (
        <div className='bg-[#F1F5F9] calc-height rounded-b-3xl'>
            <p className='border pl-12 text-xl text-black mb-8 font-bold bg-[#F8FAFC] h-14 flex items-center rounded-t-xl'><VscGitPullRequestCreate className='ml-5 mr-3 w-6 h-6'/>Add Courses</p>
            <div className='w-[325px] md:w-[600px] mx-auto'>
            <p className='w-full text-center text-[#ea3d5a] text-md  py-3 border-l-4 border-[#ea3d5a]  mb-8 bg-white shadow-md rounded-md mx-auto  bg-gradient-to-r from-stone-100 to-blue-50 drop-shadow-md'><b className="font-bold info-size">Info: </b>Please Fill up the form below correctly to create new courses. </p>
                <form onSubmit={handleAddCourse} className='flex flex-col items-center   bg-gradient-to-r from-stone-100 to-blue-50 py-10 rounded-xl drop-shadow-md'>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Faculty Address: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-4 ' name='facultyAddress' placeholder='Enter faculty address' onBlur={(e) => courseAddHandleChange(e, e.target.name)}/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Faculty Name: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-3' name="facultyName" placeholder='Enter faculty name' onBlur={(e) => courseAddHandleChange(e, e.target.name)}/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Course Code: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-3' name="courseCode" placeholder='Enter course code' onBlur={(e) => courseAddHandleChange(e, e.target.name)}/>
                    <div className='flex justify-start w-full ml-8 md:ml-[100px]'>
                    <label htmlFor="#" className='font-bold'>Course Title: </label>
                    </div>
                    <input type="text" className='border focus:outline-none w-[300px] md:w-[500px] h-10 bg-gray-200 pl-3 mb-3' name="courseTitle" placeholder='Enter course title' onBlur={(e) => courseAddHandleChange(e, e.target.name)}/>
                    {
                        isLoading && <Loader></Loader>
                    }
                    <input type="submit" value="Add Course" className='rounded bg-[#ea3d5a] px-5 text-white py-2 cursor-pointer mt-5' />
                </form>
            </div>
        </div>
    )
}

export default AddCourses;