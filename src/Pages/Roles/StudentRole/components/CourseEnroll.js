import { ethers } from 'ethers';
import React, { useContext, useEffect } from 'react'
import  { useState } from 'react';
import Loader from '../../../Shared/Loader';


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
    // event.preventDefault();

    const to = await selectedRowData.to;
    const courseCode = await selectedRowData.courseCode;
    const courseTitle = await selectedRowData.courseTitle;
    const faculty = await selectedRowData.facultyName;
      console.log(courseCode, courseTitle, faculty);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
  
      const EnrollContract = new ethers.Contract("0x12504118e01f32c22F0631f610A38065A131f5b5", abi, signer);
      const enrollHash = await EnrollContract.getEnroll(to, courseCode, courseTitle, faculty);
      setIsLoading(true)
      console.log(`Loading - ${enrollHash.hash}`);
      await enrollHash.wait();
      setIsLoading(false)
      console.log(`Success - ${enrollHash.hash}`);
      swal("Successfully Enrolled", "You successfully Enrolled to the course", "success");
    
  }

  // console.log("selected:", selectedRowData);

  

  return (
    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
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

      {/* <pre>Selected row: {JSON.stringify(selectedRowData, null, 2)}</pre> */}
    </div>
  )
}

export default CourseEnroll;