import { GetData } from './components/getData';
import './styles/main.css';

function App() {
  return (
    <div className="app">
      <h1>Covid19 Information</h1>
      <div className='renderArea'>
        <GetData/>
      </div>
    </div>
  );
}

export default App;
