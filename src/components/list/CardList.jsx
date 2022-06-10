import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CardItem } from './CardItem';


export const CardList = ({citys, handleDeleteCity}) => {

  /* console.log(citys) */
  return (
    <div className='search-cards'>
      {
        citys.map(c =>(
          <div className='card-s' key={c.id}>
            <MdDeleteForever className='card-delete' onClick={()=>handleDeleteCity(c.id)}/>
            <CardItem cities={c.city} />
          </div>
          
        ))
      }


    </div>
  )
}
