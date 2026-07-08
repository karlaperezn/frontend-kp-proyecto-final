import './App.css';
import './root.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { IniciarSesion } from './components/IniciarSesion';
import { Registrarse } from './components/Registrarse';
import { Dashboard } from './components/usuario/Dashboard/Dashboard';

function App() {
  //Sign up
  const [valuesNewUser, setValuesNewUser] = useState({
    nameRegister: '',
    emailRegister: '',
    passwordRegister: ''
  })
  //Log in
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordlLogin] = useState('')



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrarse' element={<Registrarse valuesNewUser={valuesNewUser} setValuesNewUser={setValuesNewUser} />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion emailLogin={emailLogin} setEmailLogin={setEmailLogin} passwordLogin={passwordLogin} setPasswordLogin={setPasswordlLogin} />} />

        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;