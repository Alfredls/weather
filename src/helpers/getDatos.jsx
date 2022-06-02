import { useEffect, useState } from "react";
import { useApi } from "../../../monedas/src/hooks/useApi";


export const getDatos = async() => {

  const cuidad = 'tarija'

  const { data } = useApi(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cuidad}&days=3`);


    const horas = []
    const horasData = await data.data.forecast.forecastday[0].hour
    horasData.forEach(h =>{
      horas.push(
        {
          hora: h.time.substring(11, 16),
          temp: h.temp_c,
          icon: h.condition.icon
        },
      )
    })

    
    const dias = [];
    const diasData = await data.data.forecast.forecastday
    diasData.forEach(d =>{
      dias.push(
        {
          dia: d.date,
          icon: d.day.condition.icon,
          temp_max: d.day.maxtemp_c,
          temp_min: d.day.mintemp_c,
        },
      )
    })
    
    const weathers = {
      cuidad: data.data.location.name,
      pais:data.data.location.country,
      temp: data.data.current.temp_c,
      txt: data.data.current.condition.text,
      icon: data.data.current.condition.icon,
      viento: data.data.current.wind_mph,
      presion: data.data.current.pressure_in,
      sensacion: data.data.current.feelslike_c,
      sol_salida: data.data.forecast.forecastday[0].astro.sunrise,
      sol_entrada: data.data.forecast.forecastday[0].astro.sunset,
      horas: horas,
      dias: dias,
    }


  return weathers
}
