import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';
import React from 'react';
import { FBI } from './components/fbi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';




function App() {
  return (
    <div className="app">
      <h1 id='top'>FBI Information</h1>
      <div className='renderArea'>
        <Container fluid='xs'>
          <Stack gap={3} className="col-md-5 mx-auto">
            <FBI/>
          <a className='top' href="#top"><FontAwesomeIcon icon={faArrowUp}/></a>
          </Stack>
        </Container>
        
      </div>
    </div>
  );
}

export default App;
