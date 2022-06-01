import React from 'react'
import urlImg from '../../../assets/images/icon.svg';

export const WeatherHeader = () => {
  return (
      <div className='weather-header'>
        <h2 className='title'>San Fransisco</h2>
        <div className='weather-temp'>
          <span className='grados'>18<span className='grados__c'>&#176;</span></span>
          <div className='btn'>Cloudy</div>
        </div>
        <img className='imgBig' alt='icon-imagen' src={urlImg} />
      </div>
  )
}
