import React from 'react'
import { CardList } from '../components/list/CardList'
import { Search } from '../components/list/Search'

export const List = () => {
  return (
    <div className='container'>
      <div className='page'>
        <Search />
        <div className='search-cards'>
          <CardList />
          <CardList />
          <CardList />
          <CardList />
          <CardList />
        </div>
      </div>
    </div>
  )
}
