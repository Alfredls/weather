import React from 'react'
import { Sun } from '../components/home/sun/Sun';
import { Weather } from '../components/home/weather/Weather';
import { Hours } from '../components/home/hours/Hours';
import { Days } from '../components/home/day/Days';
import { useApi } from '../hooks/useApi';


export const Home = () => {

  const buscarCuidad = 'madrid';

  const { data } = useApi(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${buscarCuidad}&days=5`);


    const horas = []
    const horasData = data.data.forecast.forecastday[0].hour
    horasData.forEach(h =>{
      horas.push(
        {
          hora: h.time.substring(11, 13),
          temp: h.temp_c.toFixed(),
          icon: h.condition.icon
        },
      )
    })

    
    const dias = [];
    const diasData =  data.data.forecast.forecastday
    diasData.forEach(d =>{
      dias.push(
        {
          dia: d.date,
          icon: d.day.condition.icon,
          temp_max: d.day.maxtemp_c.toFixed(),
          temp_min: d.day.mintemp_c.toFixed(),
        },
      )
    })
    
    const weathers = {
      ciudad: data.data.location.name,
      pais:data.data.location.country,
      temp: data.data.current.temp_c.toFixed(),
      txt: data.data.current.condition.text,
      icon: data.data.current.condition.icon,
      viento: data.data.current.wind_mph,
      presion: data.data.current.pressure_in.toFixed(1),
      sensacion: data.data.current.feelslike_c,
      sol_salida: data.data.forecast.forecastday[0].astro.sunrise,
      sol_entrada: data.data.forecast.forecastday[0].astro.sunset,
      horas: horas,
      dias: dias,
    }

    console.log(weathers);
    const{ sol_salida, sol_entrada} = weathers;
    /* console.log(ciudad, 'kkkk'); */

  return (
    <div className='container'>
      <div className='page'>
        <Weather datos={weathers}/>
        <Sun salida={sol_salida} entrada={sol_entrada} />
        <Hours datos={weathers}/>
        <Days datos={weathers} />
      </div>
    </div>
  )
}
