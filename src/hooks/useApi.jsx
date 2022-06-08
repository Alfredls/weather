import axios from 'axios'
import {useState, useEffect} from 'react'

export const useApi = (API) => {
  const [loading, setLoading] = useState(true)
	const [data, setData] = useState({}) 

	const options = {
	    method: 'GET',
	    headers: {
	    	'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
	    	'X-RapidAPI-Key': '58230c9fb1msh0d5e1d52ec86fdbp11cc5djsn54b283161f37'
	      }
      };
	 useEffect(() => {

    const consultaApi = async()=>{
      const url = API;
      const resp = await axios.get(url, options);
      const respData = resp
			setData(respData);
			setLoading(false)
		}
		consultaApi()
	}, [API])
  return {loading, data}
}
