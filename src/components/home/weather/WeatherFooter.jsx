import React from 'react'
import { TbDroplet } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { WiTime6 } from "react-icons/wi"

export const WeatherFooter = () => {
  return (
    <div className='weather-footer'>
        <span className='data-icon'><TbDroplet className='icons-d'/>13%</span>
        <span className='data-icon'><WiTime6 className='icons-d'/>0.533 mBar</span>
        <span className='data-icon'><FaWind className='icons-d'/>6km/h</span>
      </div>
  )
}
