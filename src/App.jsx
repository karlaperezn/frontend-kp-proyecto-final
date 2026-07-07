import './App.css';
import './root.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { IniciarSesion } from './components/IniciarSesion';
import { Registrarse } from './components/Registrarse';

function App() {

  const [valuesNewUser, setValuesNewUser] = useState({
    nameRegister: '',
    emailRegister: '',
    passwordRegister: ''
  })



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion />} />

        <Route path='/registrarse' element={<Registrarse valuesNewUser={valuesNewUser} setValuesNewUser={setValuesNewUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;