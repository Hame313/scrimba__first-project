import React from 'react'
import logo from '../logo.svg'

const Nav = () => {
  return (
    <nav>
        <div className='nav'>
    <img alt="react-logo" src={logo} width="100px"/>
   <h1>ReactFacts</h1>
   </div>
   <h3 className='nav__heading'>React Course-Project 1</h3>
   </nav>
  )
}

export default Nav