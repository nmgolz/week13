import React from 'react'
import NavButton from './NavButton'
import {NavbarBrand} from 'reactstrap';

function NavBar() {
  return (
    <div className='containter-fluid bg-dark text-light px-2'>
            <NavbarBrand>Week13</NavbarBrand>
            <NavButton title="Friends"/>
            <NavButton title="Comments"/>
    </div>
  )
}

export default NavBar