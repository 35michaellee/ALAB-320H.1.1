import React from 'react'
import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList(props) {
  return (
    <>
    <h1>Employee List</h1>
    <ul>
         {
         props.data.map((employee, index) => (
            <EmployeeListItem 
             key={index}
            name={employee.name}
            title= {employee.title}
            office={employee.office}
            mobile= {employee.mobile}
            sms={employee.sms}
            email={employee.email}
            />
        ))
        }
       
    </ul>

    </>
  )
};
