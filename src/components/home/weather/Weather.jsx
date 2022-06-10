import React from 'react';
import { WeatherFooter } from './WeatherFooter';
import { WeatherHeader } from './WeatherHeader';

export const Weather = ({datos}) => {

  const { ciudad, temp, txt, viento, presion, lluvia, icon } = datos;
  /* console.log(ciudad, temp, txt, viento, presion, 'luisss'); */
  return (
    <div className='weather'>
      <WeatherHeader ciudad={ciudad} temp={temp} txt={txt} icon={icon}/>
      <WeatherFooter lluvia={lluvia} viento={viento} presion={presion}/>
    </div>
  )
}
