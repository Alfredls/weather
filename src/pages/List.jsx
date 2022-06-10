import React, { useReducer } from 'react'
import { CardList } from '../components/list/CardList'
import { Search } from '../components/list/Search'
import { v4 as uuidv4 } from 'uuid';
import { cityReducer } from '../reducer/cityReducer';

const init = [
  {
    id:uuidv4(),
    city: 'tarija',
  }
]

export const List = () => {

  const[citys, dispatch] = useReducer(cityReducer, init)
  /* console.log(citys) */

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
