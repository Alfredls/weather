import React, { useEffect, useState } from 'react'
import { useApi } from '../hooks/useApi';
import { IndexHome } from '../components/home/indexHome';
import { Spinner } from '../components/Spinner';


export const Home = () => {

  let mostrar = 'ww';

  const buscarCuidad = 'madrid';

  const {loading, data } = useApi(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${buscarCuidad}&days=5`);

  const [weatherData, setWeatherData] = useState({})

  // OBSERVA DESDE AQUI // ///////////////////////////

   

  const OrdenarDatos = ()=>{
    
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
    const diasData = data.data.forecast.forecastday
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
      pais: data.data.location.country,
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
    setWeatherData(weathers);
  }

  /* if(!weatherData){
    const{ sol_salida, sol_entrada} = weatherData;
    console.log(sol_entrada, 'luis'); 
  } */

  useEffect(() => {
    if(!loading){
      OrdenarDatos();
    }
    
  }, [data])
  

  
  if(loading){
    mostrar = <Spinner />
    console.log('off')
  }else{
    mostrar = <IndexHome dat={weatherData} />
    console.log('ok')
  }

  return (
    <div className='container'>
      <div className='page'>
        {mostrar}
      </div>
    </div>
  )
}
