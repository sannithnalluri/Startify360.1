import './App.css';
import Homepage from './Compoents/Homepage';
import ReactGA from 'react-ga';

function App() {

  ReactGA.initialize('G-QDEGHKKHX4');

  return (
    <div className="App">
     <Homepage/>
    </div>
  );
}

export default App;
