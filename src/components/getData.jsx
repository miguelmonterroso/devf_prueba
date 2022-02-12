import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { RenderData } from './renderData'

export const GetData = () => {
    const [Data, setData] = useState([])

    const getData = () =>{
        var config = {
            method: 'get',
            url: 'https://covid-api.mmediagroup.fr/v1/cases?country=France',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            const pais = response.data.All
            const info = {
                nombre: pais.country,
                confirmados: pais.confirmed,
                muertes: pais.deaths,
                capital: pais.capital_city,
                poblacion: pais.population,
                continente: pais.continent,
                expectativa_vida: pais.life_expectancy,
                ubicacion: pais.location,
                ab: pais.abbreviation
            }
            setData(list => [...list, info])
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className="info">
        <h2>hola</h2>
        <h3>{Data[0].nombre}</h3>
    </div>
    
  )
}
