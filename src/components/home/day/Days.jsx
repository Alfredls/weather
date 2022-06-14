import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { elDia } from '../../../helpers/elDia';
import { TbDroplet } from "react-icons/tb";

export const Days = ({datos}) => {

  const { dias} = datos;

  
  return (
    <div className='day'>
      {
        dias.map(d =>
        <div className='day-item' key={uuidv4()}>
          <span className='day-day'>{elDia(d.dia)}</span>
          <div className='days-i'>
            <span className='txt-gray data-icon'><TbDroplet className='icons-d'/>{d.lluvia_d}%</span>
            <img 
              className='hours-i' 
              src={`./assets/${d.icon}.svg`} 
              alt='icon day'
            />
          </div>
          <div className='day-temp'>
            <span>{d.temp_max}&#176;</span>
            <span className='txt-gray'>{d.temp_min}&#176;</span>
        </div>
      </div>)
      }
      
    </div>
  )
}
