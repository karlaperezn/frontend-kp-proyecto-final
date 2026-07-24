import './App.css';
import './root.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { doGet } from './services/api.services';
import { Home } from './components/Home';
import { Registrarse } from './components/Registrarse';
import { IniciarSesion } from './components/IniciarSesion';
import { Dashboard } from './components/usuario/Dashboard';
import { WeddingEditor } from './components/usuario/WeddingEditor'
import { InvitacionBoda } from './components/InvitacionBoda';

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

  //Bodas del usuario (propias y collab)
  const [weddings, setWeddings] = useState([])
  //Boda seleccionada dashboard
  const [selectedWedding, setSelectedWedding] = useState([])
  //Respuestas invitados de boda seleccionada
  const [guestsResponses, setGuestsResponses] = useState([])

  //Guarda info de inputs para crear o editar boda
  let [weddingData, setWeddingData] = useState({
    brideName: '',
    groomName: '',
    eventDate: '',
    ceremony: {
      place: '',
      address: '',
      hour: '',
    },
    reception: {
      place: '',
      address: '',
      hour: '',
    },
    design: {
      tipography: ['Luxurious Script', 'Space Grotesk'],
      colors: ['#838969', '#414C3A']
    }
  })

  //Colaboradores de una boda
  const [collabs, setCollabs] = useState([])

  //Cargar todas las bodas de un usuario
  useEffect(() => {
    async function fetchWeddings() {
      const userId = localStorage.getItem('id')
      const res = await doGet(`weddings/my-weddings/${userId}`)

      const allWeddings = [...res.weddingsOwned, ...res.weddingCollabs]
      setWeddings(allWeddings)

      const savedId = localStorage.getItem("selectedWeddingId");
      if (savedId) {
        const weddingFound = allWeddings.find(w => w._id === savedId);

        if (weddingFound) {
          setSelectedWedding(weddingFound);
        }
      }
    }
    fetchWeddings()
  }, [])

  //Las respuesta de invitados de una boda
  useEffect(() => {
    if (!selectedWedding || !selectedWedding._id || Array.isArray(selectedWedding)) {
      return;
    }
    async function fetchGuestsResponses() {
      try {
        const weddingId = selectedWedding._id;
        const res = await doGet(`guests/show-responses/${weddingId}`)
        if (res && res.guestsResponses) {
          setGuestsResponses(res.guestsResponses);
        }

      } catch (error) {
        console.error("Error al cargar las respuestas de invitados:", error);
      }
    }
    fetchGuestsResponses()
  }, [selectedWedding])



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrarse' element={<Registrarse valuesNewUser={valuesNewUser} setValuesNewUser={setValuesNewUser} />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion emailLogin={emailLogin} setEmailLogin={setEmailLogin} passwordLogin={passwordLogin} setPasswordLogin={setPasswordlLogin} />} />

        <Route path='/dashboard' element={<Dashboard weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} setGuestsResponses={setGuestsResponses} collabs={collabs} setCollabs={setCollabs} />} />
        <Route path='/dashboard/nueva-boda' element={<WeddingEditor modo="create" weddingData={weddingData} setWeddingData={setWeddingData} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} />} />
        <Route path='/dashboard/editar/:weddingId' element={<WeddingEditor modo="edit" weddingData={weddingData} setWeddingData={setWeddingData} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} />} />

        <Route path='/plantilla' element={<InvitacionBoda template={true} />} />
        <Route path='/invitacion/:weddingSlug' element={<InvitacionBoda template={false} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;