import { useEffect } from "react"
import { getDatos } from "./helpers/getDatos";
import { useApi } from "./hooks/useApi";
import { AppRouter } from "./routers/AppRouter";

function App() {
 /*  fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=tarija&days=5', options) */

/*  const {weather} = getDatos();
 
 console.log(weather, 'datos'); */

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
