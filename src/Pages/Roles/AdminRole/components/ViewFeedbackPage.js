import React, { useContext } from 'react'
import { FeedbackContext } from '../../../Context/Context';

const ViewFeedbackPage = ({feedbackByCourseCode}) => {
    // const {createEthereumContract} = useContext(FeedbackContext);
    // console.log("Course code from view feedback page: ",courseCode);
  return (
    <div>
        <p className='text-center text-[#16728e]  text-lg md:text-lg py-3 border-l-8 border-[#5bc0de]  mt-4 bg-[#4bc3e41d] rounded-md w-9/12 md:w-6/12 mx-auto'><b className="font-bold">Info: </b>This table below shows the feedbacks and rating evaluate and send by the students: .</p>
        <div>
       <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
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
               Course Codes
              </th>
              <th
                class="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Ratings
              </th>
              <th
                class=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Comments
              </th>
            </tr>
          </thead>
          <tbody>
            {
                feedbackByCourseCode?.map(course => <tr>
                     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center justify-center">
                  <div class="flex-shrink-0 w-10 h-10">
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                     {course?.courseCode}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap">{course?.rating}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap">{course?.comment}</p>
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

export default ViewFeedbackPage;