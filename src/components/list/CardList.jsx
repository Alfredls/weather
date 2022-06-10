import React from 'react'
import { TbDroplet } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import icons from '../../assets/day/113.svg';


export const CardList = ({citys, handleDeleteCity}) => {
  console.log(citys)
  return (
    <div className='search-cards'>
      {
        citys.map(c =>(

          <div className='card-s' key={c.id}>
            <MdDeleteForever className='card-delete' onClick={()=>handleDeleteCity(c.id)}/>
            <div className='card-T'>
              <span className='card-T__time'>22&#176;</span>
              <span>{c.city}</span>
              <span className='card-T__contry'>Bolivia</span>
            </div>
            <div className='card-D'>
              <span className='card-D__i'>
                <TbDroplet className='icons-card'/>
                4%
              </span>
              <span className='card-D__i'>
                <FaWind className='icons-card'/>
                8km/h
              </span>
            </div>
            <img src={icons} alt="icon card" className='card-I' />
          </div>
          
        ))
      }


    </div>
  )
}
