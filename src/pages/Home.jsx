import React, { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi';
import { IndexHome } from '../components/home/indexHome';
import { Spinner } from '../components/Spinner';
import { useDataWeather } from '../hooks/useDataWeather';
import { Weather } from '../components/home/weather/Weather';
import { Sun } from '../components/home/sun/Sun';
import { Days } from '../components/home/day/Days';
import { Hours } from '../components/home/hours/Hours';


export const Home = () => {

  const {cargando, weatherData} = useDataWeather('tarija')

  

  
  

  return (
    <div className='container'>
      <div className='page'>
        {
          cargando ? <Weather datos={weatherData} /> :<Spinner className='spinner' />
        }
        {
          cargando ? <Sun datos={weatherData} /> :null
        }
        {
          cargando ? <Hours datos={weatherData} /> :null
        }
        {
          cargando ? <Days datos={weatherData} /> :null
        }
      </div>
    </div>
  )
}
