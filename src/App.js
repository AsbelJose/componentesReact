import './App.css';
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
    </>
  );
}

export default App;
