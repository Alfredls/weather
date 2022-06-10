import React, { useEffect, useReducer } from 'react'
import { CardList } from '../components/list/CardList'
import { Search } from '../components/list/Search'
import { cityReducer } from '../reducer/cityReducer';

const init = ()=>{
  return JSON.parse(localStorage.getItem('city')) || []
}

export const List = () => {

  const[citys, dispatch] = useReducer(cityReducer, [], init)

  useEffect(() => {
    localStorage.setItem('city', JSON.stringify(citys))
  }, [citys])
  

  const handleAddCity = (newCity)=>{
    dispatch({
      type: 'add',
      payload: newCity,
    })
  }
  const handleDeleteCity = (id)=>{
    dispatch({
      type: 'delete',
      payload: id,
    })
    console.log(id)
  }

  return (
    <div className='container'>
      <div className='page'>
        <Search handleAddCity={handleAddCity} />
        <CardList citys={citys} handleDeleteCity={handleDeleteCity} />
      </div>
    </div>
  )
}
