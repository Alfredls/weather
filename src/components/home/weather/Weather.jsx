import React from 'react';
import { WeatherFooter } from './WeatherFooter';
import { WeatherHeader } from './WeatherHeader';

export const Weather = ({datos}) => {

  const { ciudad, temp, txt, viento, presion, lluvia } = datos;
  /* console.log(ciudad, temp, txt, viento, presion, 'luisss'); */
  return (
    <div className='weather'>
      <WeatherHeader ciudad={ciudad} temp={temp} txt={txt}/>
      <WeatherFooter lluvia={lluvia} viento={viento} presion={presion}/>
    </div>
  )
}
