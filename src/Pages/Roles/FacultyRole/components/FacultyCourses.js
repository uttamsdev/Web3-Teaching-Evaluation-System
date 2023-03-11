import React, { useContext, useEffect } from 'react'
import {VscPreview} from 'react-icons/vsc';
import { FeedbackContext } from '../../../Context/Context';

const FacultyCourses = () => {
    const {getFacultyCourses, facultyCourses} = useContext(FeedbackContext);

    console.log(facultyCourses);
    useEffect(()=>{
        getFacultyCourses();
    },[])
  return (
    <div className='bg-[#F5F5F5] calc-height rounded-b-3xl'>
        <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><VscPreview className='ml-5 mr-3 w-6 h-6'/>My Courses</p>
       <div>
       <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">Courses</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto flex justify-center">
      <div
        class="inline-block w-3/4 shadow-md rounded-lg overflow-hidden"
      >
        <table class=" w-full leading-normal">
          <thead>
            <tr>
              <th
                class="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Name
              </th>
              <th
                class="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Code
              </th>
              <th
                class=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Title
              </th>
            </tr>
          </thead>
          <tbody>
            {
                facultyCourses?.map(course => <tr>
                     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center justify-center">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://img.favpng.com/1/20/4/computer-icons-teacher-professor-education-lecturer-png-favpng-1BNAzeu8934LbrrczvkSnnZ2B.jpg"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                     {course?.facultyName}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap">{course?.courseCode}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap">{course?.courseTitle}</p>
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