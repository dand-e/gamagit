//import logo from './logo.svg';
import './App.css';
import React, {  useState } from 'react';
import axios from 'axios';

function App(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
  }

  return (
    <>
    <h1>{ props.title }, {props.user}!</h1>
    <h4>Digite o nome do usuário cujos repertórios do github deseja ver:</h4>
    {/* <div className="App"> */}
     {/* <header className="App-header"> */}
    {/*    <img src={logo} className="App-logo" alt="logo" /> */}
        <input /*name='usuario' id='usuario'*/ className='usuarioInput' placeholder='Usuário' value={ usuario } onChange={e => setUsuario(e.target.value)}/><br/>
        <button type='button' onClick={handlePesquisa()}>Pesquisar</button> 
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
