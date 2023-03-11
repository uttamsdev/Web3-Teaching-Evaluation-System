import React from 'react'
import { useState } from "react";
import { ImRadioChecked, ImRadioUnchecked } from "react-icons/im";

const FeedbackPage = ({facultyAddress, courseCodeState}) => {
    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);
    const [number2, setNumber2] = useState(0);
    const [hoverStar2, setHoverStar2] = useState(undefined);
    const [number3, setNumber3] = useState(0);
    const [hoverStar3, setHoverStar3] = useState(undefined);
    const [number4, setNumber4] = useState(0);
    const [hoverStar4, setHoverStar4] = useState(undefined);
    const [number5, setNumber5] = useState(0);
    const [hoverStar5, setHoverStar5] = useState(undefined);
    const [number6, setNumber6] = useState(0);
    const [hoverStar6, setHoverStar6] = useState(undefined);
    const [number7, setNumber7] = useState(0);
    const [hoverStar7, setHoverStar7] = useState(undefined);
    const [number8, setNumber8] = useState(0);
    const [hoverStar8, setHoverStar8] = useState(undefined);
    const [number9, setNumber9] = useState(0);
    const [hoverStar9, setHoverStar9] = useState(undefined);
    const [number10, setNumber10] = useState(0);
    const [hoverStar10, setHoverStar10] = useState(undefined);

    const handleText = (number, hoverStar) => {
        // console.log("Number:",number);
        switch (number || hoverStar) {
          case 0:
            return "Evaluate";
          case 1:
            return "Strongly Disagree";
          case 2:
            return "Disagree";
          case 3:
            return "Neutral";
          case 4:
            return "Agree";
          case 5:
            return "Strongly Agree";
          default:
            return " Pending";
        }
      };
    console.log("faculty address from feedback page: ", facultyAddress);
    console.log("Course Code from feedback page: ",courseCodeState);


    const  handleFeedbackSubmit = (event) => {
        event.preventDefault();
        const rating = (number/5) + (number2/5) + (number3/5) + (number4/5) + (number5/5) + (number6/5) + (number7/5) + (number8/5) + (number9/5) + (number10/5);
        const ratingToFixed = rating.toFixed(2);

        const comment = event.target.comment.value;
        console.log("comment: ",comment);
        console.log("rating", ratingToFixed);
    }
  return (
    <div>
        <div className='w-11/12 block mx-auto'>
            <div className='bg-[#039BE5] h-12 flex justify-center items-center mx-auto rounded-t-lg'>
                <p className='text-2xl text-white'>About Faculty</p>
            </div>
            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>1. Classes began and ended on time.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number >= index + 1 || hoverStar >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar(index + 1)} onMouseLeave={() => setHoverStar(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar(index + 1)} onMouseLeave={() => setHoverStar(undefined)} style={{ color: "black" }} onClick={() => setNumber(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number,hoverStar)}</p>
                </div>
                </div>
             </div>

            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>2. The teachers teaching method were effective.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number2 >= index + 1 || hoverStar2 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number2 && setHoverStar2(index + 1)} onMouseLeave={() => setHoverStar2(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber2(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar2(index + 1)} onMouseLeave={() => setHoverStar2(undefined)} style={{ color: "black" }} onClick={() => setNumber2(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number2,hoverStar2)}</p>
                </div>
                </div>
             </div>
             
            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>3. The teacher presented and explained material clearly through examples.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number3 >= index + 1 || hoverStar3 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar3(index + 1)} onMouseLeave={() => setHoverStar3(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber3(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar3(index + 1)} onMouseLeave={() => setHoverStar3(undefined)} style={{ color: "black" }} onClick={() => setNumber3(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number3,hoverStar3)}</p>
                </div>
                </div>
             </div>

            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>4. The teacher covered all lesson of exam.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number4 >= index + 1 || hoverStar4 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar4(index + 1)} onMouseLeave={() => setHoverStar4(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber4(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar4(index + 1)} onMouseLeave={() => setHoverStar4(undefined)} style={{ color: "black" }} onClick={() => setNumber4(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number4,hoverStar4)}</p>
                </div>
                </div>
             </div>

            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200 rounded-b-xl'>
                 <p className='ml-4 text-lg font-bold '>5. The teacher was available for help outside class, if needed.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number5 >= index + 1 || hoverStar5 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar5(index + 1)} onMouseLeave={() => setHoverStar5(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber5(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar5(index + 1)} onMouseLeave={() => setHoverStar5(undefined)} style={{ color: "black" }} onClick={() => setNumber5(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number5,hoverStar5)}</p>
                </div>
                </div>
             </div>

             
           
      </div>


      <div className='w-11/12 block mx-auto mt-8'>
            <div className='bg-[#039BE5] h-12 flex justify-center items-center mx-auto rounded-t-lg'>
                <p className='text-2xl text-white'>About Course</p>
            </div>
            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>1. The course was well designed  and organized.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number6 >= index + 1 || hoverStar6 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar6(index + 1)} onMouseLeave={() => setHoverStar6(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber6(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar6(index + 1)} onMouseLeave={() => setHoverStar6(undefined)} style={{ color: "black" }} onClick={() => setNumber6(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number6,hoverStar6)}</p>
                </div>
                </div>
             </div>

            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>2. The  content specified course outline was actually covered in class.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number7 >= index + 1 || hoverStar7 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number2 && setHoverStar7(index + 1)} onMouseLeave={() => setHoverStar7(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber7(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar7(index + 1)} onMouseLeave={() => setHoverStar7(undefined)} style={{ color: "black" }} onClick={() => setNumber7(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number7,hoverStar7)}</p>
                </div>
                </div>
             </div>
             
            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>3. The course was interesting and useful.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number8 >= index + 1 || hoverStar8 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar8(index + 1)} onMouseLeave={() => setHoverStar8(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber8(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar8(index + 1)} onMouseLeave={() => setHoverStar8(undefined)} style={{ color: "black" }} onClick={() => setNumber8(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number8,hoverStar8)}</p>
                </div>
                </div>
             </div>

            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200'>
                 <p className='ml-4 text-lg font-bold '>4. The material covered in this course was not taught in another course.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number9 >= index + 1 || hoverStar9 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar9(index + 1)} onMouseLeave={() => setHoverStar9(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber9(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar9(index + 1)} onMouseLeave={() => setHoverStar9(undefined)} style={{ color: "black" }} onClick={() => setNumber9(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number9,hoverStar9)}</p>
                </div>
                </div>
             </div>

            <div className='h-24 bg-white flex items-center relative border-b-2 border-gray-200 shadow-gray-200 rounded-b-xl'>
                 <p className='ml-4 text-lg font-bold '>5. The course material were up to date.</p>
                <div className=''>
                <div className='flex absolute right-4'>
                {Array(5).fill().map((_, index) => number10 >= index + 1 || hoverStar10 >= index + 1 ? (<ImRadioChecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar10(index + 1)} onMouseLeave={() => setHoverStar10(undefined)} style={{ color: "#039BE5" }} onClick={() => setNumber10(index + 1)} /> ) : ( <ImRadioUnchecked className="distance h-4 w-5" onMouseOver={() => !number && setHoverStar10(index + 1)} onMouseLeave={() => setHoverStar10(undefined)} style={{ color: "black" }} onClick={() => setNumber10(index + 1)} />))}
                
                </div>
                <div className='absolute right-10 bottom-2'>
                <p className='mr-auto font-bold text-green-700'>{handleText(number10,hoverStar10)}</p>
                </div>
                </div>
             </div>

             
           
      </div>


      <div className='w-11/12 block mx-auto mt-8 pb-12'>
            <div className='bg-[#039BE5] h-12 flex justify-center items-center mx-auto rounded-t-lg'>
                <p className='text-2xl text-white'>Comment</p>
            </div>

           <form action="" onSubmit={handleFeedbackSubmit}>
           <textarea name="comment" id="" cols="30" rows="4" className='w-full focus:outline-none border-2 border-gray-200 px-2'></textarea>

            <button type='submit' className='btn bg-[#039BE5] px-12 py-3 text-white font-bold text-lg rounded-xl block mx-auto mt-4'>Submit Feedback</button>
           </form>

          

             
           
      </div>

        {/* //about course */}

</div>
  )
}

export default FeedbackPage;