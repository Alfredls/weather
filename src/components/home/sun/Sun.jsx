import React from 'react'

import imgSun from '../../../assets/images/sun1.svg';
import imgSun2 from '../../../assets/images/sun2.svg';

export const Sun = () => {
  return (
    <div className='sun'>
          <span className='data-icon sun-p1'>
            <img className='icon-sun' src={imgSun} alt='sun1'/> 
            07:00 AM
          </span>        
          <span className='data-icon sun-p2'>
            06:00 PM
            <img className='icon-sun' src={imgSun2} alt='sun2'/> 
          </span>
        </div>
  )
}
