import React from 'react';
import { WeatherFooter } from './WeatherFooter';
import { WeatherHeader } from './WeatherHeader';

export const Weather = () => {
  return (
    <div className='weather'>
      <WeatherHeader />
      <WeatherFooter />
    </div>
  )
}
