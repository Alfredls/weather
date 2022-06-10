import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Hours = ({datos}) => {
  const{ horas }=datos
  return (
      <>
        <h4 className='daysH'>Durante el dia</h4>
        <div className='hours'>
          {
          horas.map(h => <div className='hours-card' key={uuidv4()}>
            <div className='hours-t'>{h.hora} Hrs</div>
                <img 
                  className='hours-i' 
                  src={`/src/assets/${h.icon}.svg`}
                  alt='icon hours'
                />
                <div className='hours-w'>
                  {h.temp} &#176;
                </div>
          </div>)
          }
        </div>
      </>
  )
}
