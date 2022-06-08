import React from 'react'
import imgSun2 from '../../../assets/images/sun2.svg';
import { v4 as uuidv4 } from 'uuid';

export const Days = ({datos}) => {

  const { dias} = datos;

 /*  console.log(dias, "dias..."); */
  return (
    <div className='day'>
      {
        dias.map(d =>
        <div className='day-item' key={uuidv4()}>
          <span>Domingo</span>
          <img className='hours-i' src={d.icon} alt='icon day'/>
          <div className='day-temp'>
            <span>{d.temp_max}&#176;</span>
            <span className='txt-gray'>{d.temp_min}&#176;</span>
        </div>
      </div>)
      }
      
    </div>
  )
}
