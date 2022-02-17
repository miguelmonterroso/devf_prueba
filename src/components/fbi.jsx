import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { CustomCard } from './card'
import { Button } from 'react-bootstrap'

export const FBI = () => {
  const [list, setList] = useState([])
  const [count, setCount] = useState(2)

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

  const more = () => {
    var config = {
      method: 'get',
      url: `https://api.fbi.gov/wanted/v1/list?page=${count}`,
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

  const plus = () => {
    setCount(count + 1)
    more()
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
            subjects={e.subjects}
            states={e.possible_states}
          />
})



  useEffect(() => {
    getData();
  },[])


  return (
    <div className="grid">
      {createCard}
      <div className="center">
        <Button size="ls" variant="warning" onClick={plus} >Ver más</Button>
      </div>
    </div>
  )
}
