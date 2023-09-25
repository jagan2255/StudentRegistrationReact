import React, { useEffect, useState } from 'react'
import './TableDate.css'
import axios from "axios"

var apiurl = process.env.REACT_APP_API_URL



function TableData(tablerefresh) {

  const [studentdata,setStudentdata] = useState([])
  const [sort ,setSort]= useState(false)


  function formatDate(dateString) {
    const dateObject = new Date(dateString);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();
  
    return `${day}/${month}/${year}`;
  }


  useEffect(()=>{

    axios.get(`${apiurl}/api/v1/studentdata/getstudents${sort?"?sort=ASC":""}`).then((res)=>{
      if(res){
        setStudentdata(res.data)
      }
    }).catch((err)=>{
      console.log(err.message)
    })
  
  },[tablerefresh,sort])


  return (
    <div>
      <div className='tabledata'>
        <table class="table  table-striped">
          <thead>
            <tr>
              <th scope="col">Adm No</th>
              <th scope="col" onClick={()=>{sort?setSort(false):setSort(true)}}>Name {sort?<i class="fa-solid fa-arrow-up-short-wide"></i>:<i class="fa-solid fa-arrows-up-down"></i>}</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Class</th>
              <th scope="col">Division</th>
              <th scope="col">Gender</th>

            </tr>
          </thead>
          <tbody>
            {studentdata?.map((student, index) => (
            <tr key={index}>
              <th scope="row">{student?.admissionNumber}</th>
              <td>{student?.name}</td>
              <td>{formatDate(student?.dob)}</td>
              <td>{student?.className}</td>
              <td>{student?.division}</td>
              <td>{student?.gender}</td>
            </tr>
))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableData