import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [usuario, setUsuario ] = useState('Dan')
  return (
    <>
    <h1>{ props.title }, {props.user}!</h1>
    {/* <div className="App"> */}
     {/* <header className="App-header"> */}
    {/*    <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          { usuario }
        </p>
        <input name='usuario' id='usuario' className='usuarioInput' placeholder='Usuário'/><br/>
        <button type='button'>Pesquisar</button> 
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
    </>
  );
}

export default App;
