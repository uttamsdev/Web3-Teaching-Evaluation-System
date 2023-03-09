import React from 'react'
import {AiOutlineFileAdd} from "react-icons/ai";

const SubmitFeedback = () => {
  return (
    <div className='bg-[#F5F5F5] calc-height rounded-b-3xl'>
    <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><AiOutlineFileAdd className='ml-5 mr-3 w-6 h-6'/>View Feedbacks</p>
    <p>Submit feedback</p>
</div>
  )
}

export default SubmitFeedback;