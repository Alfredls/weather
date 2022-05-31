import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";

export const Menu = () => {
  return (
    <div className='nav'>
      <NavLink  className='item'  to='/'><AiFillHome/></NavLink>
      <NavLink className='item' to='/list'><AiOutlineHeart /></NavLink>
    </div>
  )
}
