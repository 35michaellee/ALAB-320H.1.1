import React from 'react'

export default function EmployeeListItem(props) {
  return (
    <div className="EmployeeListItem" >
            <h3>{props.name}</h3>
            <p>Title: {props.title}</p>
            <p>Office: {props.office}</p>
            <p>Mobile: {props.mobile}</p>
            <p>SMS: {props.sms}</p>
            <p>Email: {props.email}</p>
    
    </div>
  )
}
