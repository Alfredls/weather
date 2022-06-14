import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const geoLocation = () => {

  const [geo, setGeo] = useState({})
  const [selec, setSelec] = useState(false)

  const locationPosicion = () => {
    const geolocation = navigator.geolocation;
    geolocation.getCurrentPosition(getPosition, error, options);
  };

  const options = {
    enableHightAccuracy: true,
    timeout: 5000,
    maximunAge: 0,
  };

  const getPosition = (position) => {
    const cordenadas ={
      lat:  position.coords.latitude, 
      long: position.coords.longitude,
    }
    setGeo(cordenadas)
    setSelec(true)
  };

  const error = (error) => {
    setGeo(error)
  };

  useEffect(() => {
    locationPosicion()
    
  }, [])
  


  console.log(geo, '..dentro')

  return {geo, selec}
}



