import { ethers } from 'ethers';
import React, { useContext, useEffect } from 'react'
import  { useState } from 'react';
import Loader from '../../../Shared/Loader';
import {VscPreview} from 'react-icons/vsc';
import { HiFolderAdd } from "react-icons/hi";
import { AiOutlineAppstoreAdd } from  "react-icons/ai";


import { useTable } from 'react-table';
import swal from 'sweetalert';
import abi from '../../../../utils/abi.json';
import { FeedbackContext } from '../../../Context/Context';
const CourseEnroll = () => {
  const { ethereum } = window;
  const [isLoading, setIsLoading] = useState(false);
  const { getCourses, allCourses} = useContext(FeedbackContext);
  console.log("all courses",allCourses);

 
  useEffect(()=>{
    getCourses();
  },[])

  //ordering the data
  const data = allCourses.map(course => ({
    to: course.to,
    courseCode: course.courseCode,
    courseTitle: course.courseTitle,
    facultyName: course.facultyName
  }))
  // const data = [
  //   {
  //     courseCode: 'CSE101',
  //     courseTitle: 'Computer Programming',
  //     faculty: "Md Raisul Islam",
      
  //   },
  //   {
  //     courseCode: 'CSE434',
  //     courseTitle: 'Computer Programming',
  //     faculty: "Md Raisul Islam",
      
  //   }
  // ]

  const columns = React.useMemo(
    () => [
      {
        Header: 'Faculty Address',
        accessor: 'to'
      },
      {
        Header: 'Course Code',
        accessor: 'courseCode' // accessor is the "key" in the data
      },
      {
        Header: 'Course Title',
        accessor: 'courseTitle'
      },
      {
        Header: 'Faculty',
        accessor: 'facultyName'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  const [selectedRowData, setSelectedRowData] = useState([]);

  const getSelectedRowwValues = selectedRow => {
    setSelectedRowData({ ...selectedRow.values });
    getEnrollToCourse();
    console.log({ ...selectedRow.values })
  };

  const getEnrollToCourse = async () => {
    const to = await selectedRowData.to;
    const courseCode = await selectedRowData.courseCode;
    const courseTitle = await selectedRowData.courseTitle;
    const faculty = await selectedRowData.facultyName;
      console.log(courseCode, courseTitle, faculty);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
  
      const EnrollContract = new ethers.Contract("0xFCB66de53833847446e6E685DE93212220939CA8", abi, signer);
      const enrollHash = await EnrollContract.getEnroll(to, courseCode, courseTitle, faculty);
      setIsLoading(true)
      console.log(`Loading - ${enrollHash.hash}`);
      await enrollHash.wait();
      setIsLoading(false)
      console.log(`Success - ${enrollHash.hash}`);
      swal("Successfully Enrolled", "You successfully Enrolled to the course", "success");
    
  }

  return (
    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
      <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><AiOutlineAppstoreAdd className='ml-5 mr-3 w-6 h-6'/>Course Enrollment</p>
      <p className='w-2/5 text-center text-[#b56a00] text-md  py-3 border-l-8 border-[#F0AD4E]  mb-8 bg-[#F4EEE4] rounded-md mx-auto'><b className="font-bold info-size">Info: </b>You have to Click on the course row to get enrolled  into the course. Thank you. </p>
     <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
     <table {...getTableProps()} className="min-w-full leading-normal">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                onClick={() => getSelectedRowwValues(row)}
                className="cursor-pointer"
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                    >
                      {cell.render('Cell')}
                    </td>
                    
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      
     </div>
     {
        isLoading && <Loader></Loader>
      }

    </div>
  )
}

export default CourseEnroll;