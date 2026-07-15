import './App.css';
import './root.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { doGet } from './services/api.services';
import { Home } from './components/Home';
import { Template } from './components/Template';
import { Registrarse } from './components/Registrarse';
import { IniciarSesion } from './components/IniciarSesion';
import { Dashboard } from './components/usuario/Dashboard';
import { NuevaBoda } from './components/usuario/NuevaBoda'

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


  useEffect(() => {
    async function fetchWeddings() {
      const userId = localStorage.getItem('id')
      const res = await doGet(`weddings/my-weddings/${userId}`)
      setWeddings([...res.weddingsOwned, ...res.weddingCollabs])
    }
    fetchWeddings()
  }, [])

  useEffect(() => {
    async function fetchGuestsResponses() {
      const weddingId = selectedWedding._id;
      const res = await doGet(`guests/show-responses/${weddingId}`)
      setGuestsResponses(res.guestsResponses)
    }
    fetchGuestsResponses()
  }, [selectedWedding])

  //Crear boda
  let [newWedding, setNewWedding] = useState({
    brideName: 'María',
    groomName: 'Pedro',
    eventDate: '2027-07-14',
    ceremony: {
      place: 'Basílica de San Miguel',
      address: 'Calle de San Justo, 4, Centro, 28005 Madrid',
      hour: '17:30',
    },
    reception: {
      place: 'Palacio del Negralejo',
      address: 'Carretera de Mejorada, Km. 3, 28522 Rivas-Vaciamadrid, Madrid',
      hour: '19:15',
    },
    design: {
      fontTitle: 'Luxurious Script',
      fontBody: '"Space Grotesk", sans-serif',
      colors: ['#838969', '#414C3A', '#fffdfa']
    }
  })


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrarse' element={<Registrarse valuesNewUser={valuesNewUser} setValuesNewUser={setValuesNewUser} />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion emailLogin={emailLogin} setEmailLogin={setEmailLogin} passwordLogin={passwordLogin} setPasswordLogin={setPasswordlLogin} />} />
        <Route path='/dashboard' element={<Dashboard weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} setGuestsResponses={setGuestsResponses} />} />
        {/* <Route path='/dashboard/:weddingId' element={}/> */}
        <Route path='/nueva-boda' element={<NuevaBoda newWedding={newWedding} setNewWedding={setNewWedding} />} />

        <Route path='/template' element={<Template />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;