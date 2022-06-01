import React from 'react'
import imgSun2 from '../../../assets/images/sun2.svg';

export const Days = () => {
  return (
    <div className='day'>
          <div className='day-item'>
            <span>Domingo</span>
            <img className='hours-i' src={imgSun2} alt='icon day'/>
            <div className='day-temp'>
              <span>19&#176;</span>
              <span className='txt-gray'>10&#176;</span>
            </div>
          </div>
        </div>
  )
}
