import { Link } from "react-router-dom"
import "../CSS/registrarse.css"
import { doPost } from "../services/api.services.js";
import { getHtml } from "../services/html.services.js";

export function Registrarse({valuesNewUser, setValuesNewUser}) {

    const handleChanges = (e) => {
    setValuesNewUser({ ...valuesNewUser, [e.target.name]: e.target.value })
  }

   const signUpUser = async (e) => {
    e.preventDefault()

    //Falta que el front haga cheack de la existencia de otro usuario

    const res = await doPost(`users/register-user`, {
      fullName: valuesNewUser.nameRegister,
      email: valuesNewUser.emailRegister,
      password: valuesNewUser.passwordRegister,
    });

    if (res.data) {
      setValuesNewUser({
        nameRegister: '',
        emailRegister: '',
        passwordRegister: ''
      })
    }

    getHtml("register-message").innerText = "¡Listo! Ya puedes acceder a tu cuenta";

  }

    return <div>
        <header>
            <div>
                <Link className="logo-link" to='/'>
                    <h3 className="h3-sansserif">Logo</h3>
                </Link>
            </div>   
            <div className="navBar">
            </div>
        </header>
        <div id="register-screen">
            <h2 className="h2-sansserif">Crea tu cuenta</h2>
            <span>Regístrate gratis para crear tu invitación de boda digital</span>

            <div className="basic-form">
                <div className="field-form">
                    <label className="small-text">Nombre completo</label>
                    <input type="text" value={valuesNewUser.nameRegister} name="nameRegister" onChange={(e) => handleChanges(e)} required/>
                </div>
                <div className="field-form">
                    <label className="small-text">Correo electrónico</label>
                    <input type="email" value={valuesNewUser.emailRegister} name="emailRegister" onChange={(e) => handleChanges(e)} required/>
                </div>
                <div className="field-form">
                    <label className="small-text">Contraseña</label>
                    <input type="password" value={valuesNewUser.passwordRegister} name="passwordRegister" onChange={(e) => handleChanges(e)} required/>
                </div>
                <div className="field-checkbox">
                    <input type="checkbox" id="terms-policy" className="checkbox"/>
                    <label className="small-text" htmlFor="terms-policy">Acepto los términos y condiciones</label>
                </div>
                <button className="button" onClick={signUpUser}>Crear cuenta</button>
                <div>
                <Link className="internal-link" to='/iniciar-sesion'>Ya tengo cuenta</Link>
                </div>
                <p id="register-message" className="statusMessages"></p>

            </div>
        </div>
    </div>
}