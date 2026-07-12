import './App.css';
import './root.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { IniciarSesion } from './components/IniciarSesion';
import { Registrarse } from './components/Registrarse';
import { Dashboard } from './components/usuario/Dashboard';
import { Template } from './components/Template';
import { doGet } from './services/api.services';

function App() {
  //Sign up
  const [valuesNewUser, setValuesNewUser] = useState({
    nameRegister: '',
    emailRegister: '',
    passwordRegister: ''
  })
  //Log in
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordlLogin] = useState('');

  //weddings
  const [weddings, setWeddings] = useState([])
  const [selectedWedding, setSelectedWedding] = useState([])
  const [guestsResponses, setGuestsResponses] = useState([])
  console.log(guestsResponses)


  useEffect(() => {
    async function fetchWeddings() {
      const userId = localStorage.getItem('id')
      const res = await doGet(`weddings/my-weddings/${userId}`)
      setWeddings([...res.weddingsOwned, ...res.weddingCollabs])
    }
    fetchWeddings()
  }, [])

  useEffect(() => {
    async function fetchGuestsResponses(){
      const weddingId = selectedWedding._id;
      const res = await doGet(`guests/show-responses/${weddingId}`)
      setGuestsResponses(res.guestsResponses)
    }
    fetchGuestsResponses()
  }, [selectedWedding])



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrarse' element={<Registrarse valuesNewUser={valuesNewUser} setValuesNewUser={setValuesNewUser} />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion emailLogin={emailLogin} setEmailLogin={setEmailLogin} passwordLogin={passwordLogin} setPasswordLogin={setPasswordlLogin} />} />
        <Route path='/dashboard' element={<Dashboard weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} />} />
        <Route path='/template' element={<Template />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;