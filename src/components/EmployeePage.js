import React from 'react';
import Header from './Header';
import EmployeeListItem from './EmployeeListItem';

export default function EmployeePage(props) {
  return (
    
    <div className="EmployeePage">
    <Header title="Employee Page"></Header>
    <EmployeeListItem {...props}></EmployeeListItem>
    </div>
  )
}
