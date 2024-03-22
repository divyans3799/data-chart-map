import React from 'react'
import './header.css'
import { CiSearch } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai';
import { SlGraph } from 'react-icons/sl';
import logo from "./../../images/logo.png"


function Header() {
  const header = [
    {name:"Statistics"},
    {name:"Overview"},
    {name:"Dashboard"},
    {name:"Analytics"}
  ]
  return (
    <div className='header-wrapper'>
    <div>
      <div className='logo-container'>
        <img src={logo} alt='logo' className='logo'/>
        <span>WASSERSTOFF</span>
      </div>
    </div>
    <div style={{position:'relative'}}>
      <input className='search-input' />
      <CiSearch className='search-icon' />
    </div>
    <div>
      <div>
        {header.map((item => {
          return(
            <span className={item.name === "Overview" ? "header-links border-bottom" :"header-links "}>{item.name}</span>
          )
        }))}
      </div>
    </div>
    <div>
      <AiOutlineUser className='no-profile-icons' />
      <SlGraph className='filter-icons' />
    </div>
    </div>
  )
}

export default Header