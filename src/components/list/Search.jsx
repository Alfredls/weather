import React from 'react'
import { useForm } from '../../../../Lista/src/hooks/useForm'
import iconLocation from '../../assets/images/location.svg'
import iconSearch from '../../assets/images/search.svg'
import { v4 as uuidv4 } from 'uuid';

export const Search = ({handleAddCity}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(description.length <= 1)return
    const newSearch ={
      id:uuidv4(),
      city: description,
      active: false,
    }
    handleAddCity(newSearch)
    reset()
  }

  return (
    <div className='search'>
      <form className='search-form' onSubmit={handleSubmit}>
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
          name='description'
          onChange={handleInputChange}
          value={description}
        />
      </form>
      <img 
        src={iconLocation} 
        alt="icon location" 
        className='icon-s'
      />
  </div>
  )
}
