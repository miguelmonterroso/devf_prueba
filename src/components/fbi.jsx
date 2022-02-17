import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { CustomCard } from './card'
import { Button } from 'react-bootstrap'

export const FBI = () => {
  // Creamos un estado para guardar la informacion de la API
  const [list, setList] = useState([])
  // Creamos un estado para hacer las consultas a cada pagina del API
  const [count, setCount] = useState(2)

  // Con esta funcion obtenemos la informacion de la API
  const getData = () => {
    var config = {
      method: 'get',
      url: 'https://api.fbi.gov/wanted/v1/list',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      // Guardamos la informacion en la constante data
      const data = response.data.items
      //Hacemos un map para poder guardar cada item dentro de nuestro estado que habiamos definido como un array vacio
      data.map(function(item){
        setList(info => [...info, item])
        return item
      })
      
      return
    })
    // En caso de error retornamos un console.log
    .catch(function (error) {
      console.log(error);
    });
  }

  // con esta funcion obtenemos informacion de la API pero por pagina para poder seguir renderizando mas items
  const more = () => {
    var config = {
      method: 'get',
      // El count viene de nuestra funcion plus para que cada vez que se de click en el boton "ver mas" nos renderice una pagina nueva de items.
      url: `https://api.fbi.gov/wanted/v1/list?page=${count}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      const data = response.data.items
      data.map(function(item){
        // Agregamos los items nuevos que recibimos y los guardamos en nuestro estado
        setList(info => [...info, item])
        return item
      })
      
      return
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // Cada vez que hagamos click en el boton "ver mas" se ejecutara la funcion plus que se encarga de sumar uno a nuestro count
  const plus = () => {
    setCount(count + 1)
    more()
  }

  // con esta funcion creamos una carta nueva, esta recibe un elemento y un index que lo utilizamos para hacer una key unica por cada uno de los items
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


// Usamos el useEffect para cuando ingresemos a nuestra pagina renderizar la informacion de la API
  useEffect(() => {
    getData();
  },[])


  // Renderizamos nuestra pagina
  return (
    <div className="grid">
      {createCard}
      <div className="center">
        <Button size="ls" variant="warning" onClick={plus} >Ver más</Button>
      </div>
    </div>
  )
}
