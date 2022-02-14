import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import { GetData } from './components/getData';




function App() {
  // React.useEffect(()=>{
  //   fetch('https://api.ipregistry.co/?key=tryout')
  //   .then(function (response) {
  //       return response.json();
  //   })
  //   .then(function (payload) {
  //       console.log(payload.location.country.name);
  //   });
  // }, [])
  return (
    <div className="app">
      <h1>Covid19 Information</h1>
      <div className='renderArea'>
        <Container fluid='md'>
          
          <GetData/>
        </Container>
      </div>
    </div>
  );
}

export default App;
