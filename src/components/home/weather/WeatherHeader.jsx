import React from 'react'
import urlImg from '../../../assets/images/icon.svg';

export const WeatherHeader = ({ciudad, temp, txt}) => {
  return (
      <div className='weather-header'>
        <h2 className='title'>{ciudad}</h2>
        <div className='weather-temp'>
          <span className='grados'>{temp}<span className='grados__c'>&#176;</span></span>
          <div className='btn'>{txt}</div>
        </div>
        <img className='imgBig' alt='icon-imagen' src={urlImg} />
      </div>
  )
}
