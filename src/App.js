import './App.css';
import Calculadora from './components/calculadora/Calculadora';
import { Cards } from './components/Cards';
import { Contador } from './components/Contador';
import persons from './dbs'


function App() {

  return (
    <>
      <h1>Cards de comentarios</h1>
      <hr/>
      <br/>
      <div className='App-container' >  
        <Cards persons={ persons } /> 
      </div>
      <h1>Contador de React</h1>
      <hr/>
      <br/>
      <Contador />
      <h1>Calculadora de React</h1>
      <hr/>
      <br/>
      <Calculadora />
    </>
  );
}

export default App;
