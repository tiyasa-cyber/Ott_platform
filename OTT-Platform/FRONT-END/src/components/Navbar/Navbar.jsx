import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

import {Link} from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')

      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt=""></img>
        <ul className="navbar-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to= "/t" className="nav-link">Tv Shows</Link></li>
          <li><Link to= "/m" className="nav-link">Movies</Link></li>
          <li><Link to= "p" className="nav-link">New & Popular</Link></li>
          <li><Link to= "list" className="nav-link">My List</Link></li>
          <li><Link to= "/l" className="nav-link">Browes by Languages</Link></li>
        </ul>
      </div> 
      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'></img>
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'></img>
        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile'></img>
          <img src={caret_icon} alt=""></img>
          <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign out of Netflix</p>
          </div>

        </div>
        

      </div>
    </div>
  )
}

export default Navbar