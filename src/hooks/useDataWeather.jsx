import React, { useEffect, useState } from 'react'
import { useApi } from './useApi';

export const useDataWeather = (BUSCARCIUDAD='tarija' ) => {


  const {loading, data } = useApi(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${BUSCARCIUDAD}&days=5&lang=es`);

  const [weatherData, setWeatherData] = useState({})
  const [cargando, setCargando] = useState(false)
  /* console.log(data, 'data....') */

  

  const OrdenarDatos = ()=>{
    const horas = []
    const horasData = data.data.forecast.forecastday[0].hour
    horasData.forEach(h =>{
      horas.push(
        {
          hora: h.time.substring(11, 13),
          temp: h.temp_c.toFixed(),
          icon: h.condition.icon.substring(35, h.condition.icon.length - 4)
        },
        )

    })

    const dias = [];
    const diasData = data.data.forecast.forecastday
    diasData.forEach(d =>{
      dias.push(
        {
          dia: d.date,
          lluvia_d:d.day.daily_chance_of_rain,
          icon: d.day.condition.icon.substring(35, d.day.condition.icon.length - 4),
          temp_max: d.day.maxtemp_c.toFixed(),
          temp_min: d.day.mintemp_c.toFixed(),
        },
      )
    })
    
    const weathers = {
      ciudad: data.data.location.name,
      pais: data.data.location.country,
      temp: data.data.current.temp_c.toFixed(),
      txt: data.data.current.condition.text,
      lluvia:data.data.forecast.forecastday[0].day.daily_chance_of_rain,
      icon: data.data.current.condition.icon.substring(35, data.data.current.condition.icon.length - 4),
      viento: data.data.current.wind_mph,
      presion: data.data.current.pressure_in.toFixed(1),
      sensacion: data.data.current.feelslike_c,
      sol_salida: data.data.forecast.forecastday[0].astro.sunrise,
      sol_entrada: data.data.forecast.forecastday[0].astro.sunset,
      horas: horas,
      dias: dias,
    }
    setWeatherData(weathers);
  }

 

  useEffect(() => {
    if(!loading){
      /* console.log('se ejecuta esto...') */
      OrdenarDatos()
      setCargando(true)
    }
  }, [data])
  

  /* console.log(weatherData, 'antesDeEnviar....') */


  return  {cargando, weatherData};
}
