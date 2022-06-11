import React, { useContext } from 'react'
import { CardList } from '../components/list/CardList'
import { Search } from '../components/list/Search'
import { CityContext } from '../reducer/cityContext';

const init = ()=>{
  return JSON.parse(localStorage.getItem('city')) || []
}

export const List = () => {

  const {citys, handleAddCity, handleDeleteCity} = useContext(CityContext)


  return (
    <div className='container'>
      <div className='page'>
        <Search handleAddCity={handleAddCity} />
        <CardList citys={citys} handleDeleteCity={handleDeleteCity} />
      </div>
    </div>
  )
}
