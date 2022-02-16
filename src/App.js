import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';
import React from 'react';
// import { GetData } from './components/getData';
import { FBI } from './components/fbi';




function App() {
  return (
    <div className="app">
      <h1>Covid19 Information</h1>
      <div className='renderArea'>
        <Container fluid='xs'>
          <Stack gap={3} className="col-md-5 mx-auto">
            <FBI/>
          </Stack>
          
          {/* <GetData/> */}
        </Container>
      </div>
    </div>
  );
}

export default App;
