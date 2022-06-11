import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CardItem } from './CardItem';
import { useNavigate } from "react-router-dom";


export const CardList = ({citys, handleDeleteCity, handleActive}) => {

  let navigate = useNavigate();
  
  const seleccionar = (id)=>{
    handleActive(id)
    navigate("/", { replace: true });
  }
  return (
    <div className='search-cards'>
      {
        citys.map(c =>(
          <div 
          className={`card-s ${c.active? 'actvive-card': ''}`} 
          key={c.id} 
          onClick={()=>seleccionar(c.id)}
          >
            <MdDeleteForever className='card-delete' onClick={()=>handleDeleteCity(c.id)}/>
            <CardItem cities={c.city} />
          </div>
          
        ))
      }


    </div>
  )
}
