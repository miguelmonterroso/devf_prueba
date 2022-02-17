import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { FBI } from './components/fbi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';




function App() {
  return (
    <div className="app">
      <h1 id='top'>FBI Information</h1>
      <div className='renderArea'>
            <FBI/>
          <a className='top' href="#top"><FontAwesomeIcon icon={faArrowUp}/></a>
      </div>
    </div>
  );
}

export default App;
