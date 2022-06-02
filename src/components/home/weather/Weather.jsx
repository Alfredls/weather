import React from 'react';
import { WeatherFooter } from './WeatherFooter';
import { WeatherHeader } from './WeatherHeader';

export const Weather = ({datos}) => {

  const { ciudad, temp, txt, viento, presion } = datos;
  /* console.log(ciudad, temp, txt, viento, presion, 'luisss'); */
  return (
    <div className='weather'>
      <WeatherHeader ciudad={ciudad} temp={temp} txt={txt}/>
      <WeatherFooter viento={viento} presion={presion}/>
    </div>
  )
}
