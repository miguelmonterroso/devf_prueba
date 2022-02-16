import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { CustomCard } from './card'
import Select from 'react-select';

export const GetData = (props) => {
    const [pais, setPais] = useState({})
    const [options, setOptions] = useState([])
    const [valueState,setValueState] = useState(`Global`)

    const handler = (event) => {
      const value = event.value
      setValueState(value)
  }
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

    useEffect(() => {
      const getSpecificCountry = () =>{
        var config = {
          method: 'get',
          url: `https://covid-api.mmediagroup.fr/v1/cases?country=${valueState}`,
          headers: { }
        };
        axios(config)
        .then(function (response) {
          const data = response.data
          const country = data.All
          setPais(country)
          return
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      getSpecificCountry();
    },[valueState])
    
  return (
    <div className="info">
        <Select onChange={handler} options={options} placeholder='Search...'/>
        <CustomCard name={pais.country} death={pais.deaths} active={pais.confirmed} ab={pais.abbreviation} population={pais.population}/>
    </div>
    
  )
}

    