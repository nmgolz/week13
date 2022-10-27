import React from 'react'
import UserName from './UserName'
import Password from './Password'

function FormHome() {
  return (
    <div className='container'>
        <div className='card border border-warning border-2'>
            <div className='card-header bg-dark text-light App'>
                <h3>Log In</h3>
            </div>
            <div className='card-body bg-info text-dark'>
            <UserName />
            <Password />
            </div>
        </div>
    </div>
  
  )
}

export default FormHome