import React from 'react'
import { Days } from './day/Days';
import { Hours } from './hours/Hours';
import { Sun } from './sun/Sun';
import { Weather } from './weather/Weather';

export const IndexHome = ({dat}) => {
  console.log(dat, 'hola')

  const{dias} = dat;
  
  return (
    <>
      {/* <Weather datos={dat}/> */}
     {/*  <Sun salida={sol_salida} entrada={sol_entrada} /> */}
      {/* <Hours datos={dat}/> */}
      <Days dat={dias} />
    </>
  )
}
