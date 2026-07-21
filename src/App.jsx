import './App.css';
import './root.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
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

  //Bodas del usuario (propias o collab)
  const [weddings, setWeddings] = useState([])
  //Boda seleccionada dashboard
  const [selectedWedding, setSelectedWedding] = useState([])
  //Respuestas invitados de boda seleccionada
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

  //Para mostrar invitacion existente
  const [weddingInvite, setWeddingInvite] = useState([])
  const { weddingSlug } = useParams();

  useEffect(() => {
    async function fetchInvite() {
      try {
        const res = await doGet(`weddings/${weddingSlug}`);
        if(res.status) {
          setWeddingInvite(res.wedding)
        } else {
          console.error("Error de conexión")
        }

      } catch (error) {
        console.log("Error al conectar con el backend")
      }
    }
    if (weddingSlug) fetchInvite()

  }, [weddingSlug])



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registrarse' element={<Registrarse valuesNewUser={valuesNewUser} setValuesNewUser={setValuesNewUser} />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion emailLogin={emailLogin} setEmailLogin={setEmailLogin} passwordLogin={passwordLogin} setPasswordLogin={setPasswordlLogin} />} />

        <Route path='/dashboard' element={<Dashboard weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} setGuestsResponses={setGuestsResponses} />} />
        <Route path='/dashboard/nueva-boda' element={<WeddingEditor modo="create" weddingData={weddingData} setWeddingData={setWeddingData} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} />} />
        <Route path='/dashboard/editar/:weddingId' element={<WeddingEditor modo="edit" weddingData={weddingData} setWeddingData={setWeddingData} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} />} />

        <Route path='/plantilla' element={<InvitacionBoda template={true} />} />
        <Route path='/invitacion/:weddingSlug' element={<InvitacionBoda template={false} weddingInvite={weddingInvite} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;