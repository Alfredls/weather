import React from 'react'
import { Spinner } from '../components/Spinner';
import { useDataWeather } from '../hooks/useDataWeather';
import { Weather } from '../components/home/weather/Weather';
import { Sun } from '../components/home/sun/Sun';
import { Days } from '../components/home/day/Days';
import { Hours } from '../components/home/hours/Hours';


export const Home = () => {

  const {cargando, weatherData} = useDataWeather('madrid')

  return (
    <div className='container'>
      <div className='page'>
        {
          !cargando 
          ?  <Spinner className='spinner' />
          : (
            <>
              <Weather datos={weatherData} />
              <Sun datos={weatherData} />
              <Hours datos={weatherData} />
              <Days datos={weatherData} />
            </>
          )
        }
      </div>
    </div>
  )
}
