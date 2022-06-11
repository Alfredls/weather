import React, { createContext, useReducer, useEffect } from "react";
import { cityReducer } from "./cityReducer";

const init = ()=>{
  return JSON.parse(localStorage.getItem('city')) || []
}

export const CityContext = createContext(init);


export const ContextProvider = ({ children }) => {

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
  }

  return (
    <CityContext.Provider value={{citys, handleAddCity, handleDeleteCity}}>
      {children}
    </CityContext.Provider>
  )
};
