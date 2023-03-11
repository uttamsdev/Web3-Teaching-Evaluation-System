import { ethers } from 'ethers';
import React, { useContext } from 'react'
import  { useState } from 'react';


import { useTable } from 'react-table';
import swal from 'sweetalert';
import abi from '../../../../utils/abi.json';
import { FeedbackContext } from '../../../Context/Context';
const CourseEnroll = () => {
  const { ethereum } = window;
  const {isLoading, setIsLoading} = useContext(FeedbackContext);

 

  const data = [
    {
      courseCode: 'CSE101',
      courseTitle: 'Computer Programming',
      faculty: "Md Raisul Islam",
      
    },
    {
      courseCode: 'CSE434',
      courseTitle: 'Computer Programming',
      faculty: "Md Raisul Islam",
      
    }
  ]

  const columns = React.useMemo(
    () => [
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
        accessor: 'faculty'
      },
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

    const courseCode = await selectedRowData.courseCode;
    const courseTitle = await selectedRowData.courseTitle;
    const faculty = await selectedRowData.faculty;
      console.log(courseCode, courseTitle, faculty);
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
  
      const EnrollContract = new ethers.Contract("0xF6663Ce0d6932EdD5c354842caFd4bc11A6D1999", abi, signer);
      const enrollHash = await EnrollContract.getEnroll(courseCode, courseTitle, faculty);
      // setIsLoading(true)
      console.log(`Loading - ${enrollHash.hash}`);
      await enrollHash.wait();
      // setIsLoading(false)
      console.log(`Success - ${enrollHash.hash}`);
      swal("Successfully Enrolled", "You successfully Enrolled to the course", "success");
    
  }

  // console.log("selected:", selectedRowData);

  

  return (
    <div>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold'
                  }}
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
              >
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip'
                      }}
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

      <pre>Selected row: {JSON.stringify(selectedRowData, null, 2)}</pre>
    </div>
  )
}

export default CourseEnroll;