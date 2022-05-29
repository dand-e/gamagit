import React, {  useState } from 'react';
import axios from 'axios';

function Home(props) {
  const [ usuario, setUsuario ] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response))
  }

  return (
    <>
    <h1>{ props.title }, {props.user}!</h1>
    <h4>Digite o nome do usuário cujos repertórios do github deseja ver:</h4>
    <input /*name='usuario' id='usuario'*/ className='usuarioInput' placeholder='Usuário' value={ usuario } onChange={e => setUsuario(e.target.value)}/><br/>
    <button type='button' onClick={handlePesquisa()}>Pesquisar</button> 
    </>
  );
}

export default Home;
