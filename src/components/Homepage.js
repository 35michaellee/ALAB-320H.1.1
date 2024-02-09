import React from 'react'
import Header from './Header';
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar';

export default function HomePage(props) {
  return (
    <>
    <div className="homePage">HomePage
    <Header title="Home Page" />
    <SearchBar />
    <EmployeeList data={props.data} /> 
    </div>
    </>
  )
}
