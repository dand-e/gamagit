import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

import Repositories from './Repositories';
import Home from './Home';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home title='Hello' user='Gama Academy'/>}/>
        <Route path='/repositories' element={<Repositories />}/>
      </Routes>
    </BrowserRouter>
  )
}