import React from 'react'
import iconLocation from '../assets/images/location.svg'
import iconSearch from '../assets/images/search.svg'

export const List = () => {
  return (
    <div className='container'>
      <div className='page'>
        <div className='search'>
          <form className='search-form'>
            <button className='btn-form' type='submit'
            >
              <img 
                src={iconSearch} 
                alt="icon location" 
                className='icon-s'
          />
            </button>
            <input 
              type="text"
              placeholder='Buscar'
              autoComplete='off'
              className='form-input'
           />
          </form>
          <img 
            src={iconLocation} 
            alt="icon location" 
            className='icon-s'
          />
        </div>
        <div className='search-cards'>
          <div className='card-s'>card</div>
          <div className='card-s'>card</div>
          <div className='card-s'>card</div>
          <div className='card-s'>card</div>
          <div className='card-s'>card</div>
        </div>
      </div>
    </div>
  )
}
