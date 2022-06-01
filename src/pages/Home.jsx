import React from 'react'
import { Sun } from '../components/home/sun/Sun';
import { Weather } from '../components/home/weather/Weather';
import { Hours } from '../components/home/hours/Hours';
import { Days } from '../components/home/day/Days';


export const Home = () => {
  return (
    <div className='container'>
      <div className='page'>
        <Weather />
        <Sun />
        <Hours />
        <Days />
        


        
      </div>
    </div>
  )
}
