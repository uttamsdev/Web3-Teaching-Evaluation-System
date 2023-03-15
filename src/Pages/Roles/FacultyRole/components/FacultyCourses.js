import React, { useContext, useEffect } from 'react'
import { FeedbackContext } from '../../../Context/Context';

const FacultyCourses = () => {
    const {getFacultyCourses, facultyCourses} = useContext(FeedbackContext);

    useEffect(()=>{
        getFacultyCourses();
    },[])
  return (
    <div className='bg-[#F5F5F5]  rounded-b-3xl'>
        <p className='text-white  flex justify-center text-xl mb-10 font-bold bg-[#039BE5] h-12 rounded-t-xl mt-16'><p className='flex justify-center items-center'>My Courses</p></p>
       <div>
       <div className="container mx-auto px-4 sm:px-8">
        <div>
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
               Name
              </th>
              <th
                className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Code
              </th>
              <th
                className=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-200  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Title
              </th>
            </tr>
          </thead>
          <tbody>
            {
                facultyCourses?.map(course => <tr>
                     <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center justify-center">
                  <div className="flex-shrink-0 w-10 h-10">
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                     {course?.facultyName}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{course?.courseCode}</p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p className="text-gray-900 whitespace-no-wrap">{course?.courseTitle}</p>
              </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
       </div>
    </div>
  )
}

export default FacultyCourses;