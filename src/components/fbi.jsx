import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { CustomCard } from './card'

export const FBI = () => {
  const [list, setList] = useState([])

  const getData = () => {
    var config = {
      method: 'get',
      url: 'https://api.fbi.gov/wanted/v1/list',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      const data = response.data.items
      data.map(function(item){
        setList(info => [...info, item])
        return item
      })
      
      return
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const createCard = list.map((e,i)=>{
    return <CustomCard 
            id={e.id} 
            key={i} 
            title={e.title} 
            image={e.images[0].thumb} 
            age={e.publication} 
            sex={e.sex} race={e.race} 
            status={e.status}
            eyes={e.eyes_raw}
          />
})



  useEffect(() => {
    getData();
  },[])


  return (
    <div className="grid">
      {createCard}
    </div>
  )
}
