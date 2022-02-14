import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { CustomCard } from './card'
import Select from 'react-select';

export const GetData = () => {
    const [pais, setPais] = useState({})
    const [options, setOptions] = useState([])

    const work = () => {
      const getCountrys = () =>{
        var config = {
          method: 'get',
          url: 'https://covid-api.mmediagroup.fr/v1/cases',
          headers: { }
        };
        axios(config)
        .then(function (response) {
          const data = response.data
          for (const key in data) {
            const opt = {value: key, label: key}
            setOptions(list => [...list, opt])
        }
          const country = data.Guatemala.All
          setPais(country)
          return 
        
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      getCountrys()
    }

    useEffect(() => {
      work()
    },[])
  return (
    <div className="info">
        <Select options={options} placeholder='Search...'/>
        <CustomCard name={pais.country} death={pais.deaths} active={pais.confirmed} ab={pais.abbreviation} population={pais.population}/>
    </div>
    
  )
}





    // const getData = () =>{
    //     var config = {
    //         method: 'get',
    //         url: 'https://covid-api.mmediagroup.fr/v1/cases?country=France',
    //         headers: { }
    //       };
          
    //       axios(config)
    //       .then(function (response) {
    //         const pais = response.data.All
    //         const info = {
    //             nombre: pais.country,
    //             confirmados: pais.confirmed,
    //             muertes: pais.deaths,
    //             capital: pais.capital_city,
    //             poblacion: pais.population,
    //             continente: pais.continent,
    //             expectativa_vida: pais.life_expectancy,
    //             ubicacion: pais.location,
    //             ab: pais.abbreviation
    //         }
    //         setData(list => [...list, info])
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    