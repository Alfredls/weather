import React from 'react'
import imgSun from '../../../assets/images/sun1.svg';

export const Hours = () => {
  return (
    <div className='hours'>
      <div className='hours-card'>
        <div className='hours-t'>10 am</div>
        <img className='hours-i' src={imgSun} alt='icon hours' />
        <div className='hours-w'>19 &#176;</div>
      </div>
    </div>
  )
}
