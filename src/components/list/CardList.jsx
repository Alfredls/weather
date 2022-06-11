import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CardItem } from './CardItem';


export const CardList = ({citys, handleDeleteCity, handleActive}) => {

  console.log(citys)
  return (
    <div className='search-cards'>
      {
        citys.map(c =>(
          <div 
          className={`card-s ${c.active? 'actvive-card': ''}`} 
          key={c.id} 
          onClick={()=>handleActive(c.id)}
          >
            <MdDeleteForever className='card-delete' onClick={()=>handleDeleteCity(c.id)}/>
            <CardItem cities={c.city} />
          </div>
          
        ))
      }


    </div>
  )
}
