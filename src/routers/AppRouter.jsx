import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Menu } from '../components/Menu';
import { Home } from '../pages/Home';
import { List } from '../pages/List';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<List />} />
      </Routes>
    </BrowserRouter>
    
  )
}
