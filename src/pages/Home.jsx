import React, { useContext } from 'react'
import { Spinner } from '../components/Spinner';
import { useDataWeather } from '../hooks/useDataWeather';
import { Weather } from '../components/home/weather/Weather';
import { Sun } from '../components/home/sun/Sun';
import { Days } from '../components/home/day/Days';
import { Hours } from '../components/home/hours/Hours';
import { CityContext } from '../reducer/cityContext';
import { geoLocation } from '../helpers/geoLocation';
import { useEffect } from 'react';
import { useState } from 'react';


export const Home = () => {

const {geo, selec} = geoLocation()
const [gl, setGl] = useState('')



useEffect(() => {
  selec? setGl(`${geo.lat} ${geo.long}`) : setGl("Tarija")
}, [selec])


console.log(gl, selec)


  const{citys} = useContext(CityContext)

 const buscar = citys.find(c => c.active === true)


 let cuidad = buscar? buscar.city   :gl



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
