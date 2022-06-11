import React from 'react'
import { TbDroplet } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { useDataWeather } from '../../hooks/useDataWeather';
import { Spinner } from '../Spinner';

export const CardItem = ({cities = 'tarija'}) => {

  const {cargando, weatherData} = useDataWeather(cities)
  /* console.log(ciudad) */
  /* console.log(weatherData, cargando) */
  const {ciudad, pais, temp, icon, lluvia, viento} = weatherData

  return (
    <>
    {
      !cargando
      ? <Spinner />
      : (
        <>
        <div className='card-T'>
          <span className='card-T__time'>{temp}&#176;</span>
          <span className='card-T__city'>{ciudad}</span>
          <span className='card-T__contry'>{pais}</span>
        </div>
        <div className='card-D'>
          <span className='card-D__i'>
            <TbDroplet className='icons-card'/>
            {lluvia}%
          </span>
          <span className='card-D__i'>
            <FaWind className='icons-card'/>
            {viento}km/h
          </span>
        </div>
        <img src={`/assets/${icon}.svg`} alt="icon card" className='card-I' />
        </>
      )
    }
    </>
  )
}
