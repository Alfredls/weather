import React, { useContext } from 'react'
import { Spinner } from '../components/Spinner';
import { useDataWeather } from '../hooks/useDataWeather';
import { Weather } from '../components/home/weather/Weather';
import { Sun } from '../components/home/sun/Sun';
import { Days } from '../components/home/day/Days';
import { Hours } from '../components/home/hours/Hours';
import { CityContext } from '../reducer/cityContext';


export const Home = () => {

  const{citys} = useContext(CityContext)

 const buscar = citys.find(c => c.active === true)
 let cuidad = buscar? buscar.city   : 'Tarija'
 /* console.log(cuidad) */


  const {cargando, weatherData} = useDataWeather(cuidad)

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
