import { useEffect } from "react"
import { Home } from "./pages/Home";
import { AppRouter } from "./routers/AppRouter";

function App() {

  useEffect(() => {
    const options = {
	    method: 'GET',
	    headers: {
	    	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
	    	'X-RapidAPI-Key': '58230c9fb1msh0d5e1d52ec86fdbp11cc5djsn54b283161f37'
	      }
      };

    fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=tarija&days=5', options)
	    .then(response => response.json())
	    .then(response => console.log(response.forecast.forecastday))
	    .catch(err => console.error(err));

  }, [])
  

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
