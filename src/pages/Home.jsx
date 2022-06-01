import React from 'react'
import { TbDroplet } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { WiTime6 } from "react-icons/wi";

import urlImg from '../assets/images/icon.svg'
import imgSun from '../assets/images/sun1.svg'
import imgSun2 from '../assets/images/sun2.svg'


export const Home = () => {
  return (
    <div className='container'>
      <div className='page'>
        <div className='weather'>
          <div className='weather-header'>
            <h2 className='title'>San Fransisco</h2>
            <div className='weather-temp'>
              <span className='grados'>18<span className='grados__c'>&#176;</span></span>
              <div className='btn'>Cloudy</div>
            </div>
            <img className='imgBig' alt='icon-imagen' src={urlImg} />
          </div>
          <div className='weather-footer'>
            <span className='data-icon'><TbDroplet className='icons-d'/>13%</span>
            <span className='data-icon'><WiTime6 className='icons-d'/>0.533 mBar</span>
            <span className='data-icon'><FaWind className='icons-d'/>6km/h</span>
          </div>
        </div>
        <div className='sun'>
          <span className='data-icon sun-p1'>
            <img className='icon-sun' src={imgSun} alt='sun1'/> 
            07:00 AM
          </span>
          <span className='data-icon sun-p2'>
            06:00 PM
            <img className='icon-sun' src={imgSun2} alt='sun2'/> 
          </span>
        </div>
        <div className='hours'>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
          <div className='hours-card'>
            <div className='hours-t'>10 am</div>
            <img className='hours-i' src={imgSun} alt='icon hours' />
            <div className='hours-w'>19 &#176;</div>
          </div>
        </div>
        <div className='day'>
          <div className='day-item'>
            <span>Domingo</span>
            <img className='hours-i' src={imgSun2} alt='icon day'/>
            <div className='day-temp'>
              <span>19&#176;</span>
              <span className='txt-gray'>10&#176;</span>
            </div>
          </div>
          <div className='day-item'>
            <span>Domingo</span>
            <img className='hours-i' src={imgSun2} alt='icon day'/>
            <div className='day-temp'>
              <span>19&#176;</span>
              <span className='txt-gray'>10&#176;</span>
            </div>
          </div>
          <div className='day-item'>
            <span>Domingo</span>
            <img className='hours-i' src={imgSun2} alt='icon day'/>
            <div className='day-temp'>
              <span>19&#176;</span>
              <span className='txt-gray'>10&#176;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
