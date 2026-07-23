import "../CSS/portal.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { doPost } from "../services/api.services";

export function IniciarSesion({ emailLogin, setEmailLogin, passwordLogin, setPasswordLogin }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    async function login(e) {
        e.preventDefault()

        try {
            const res = await doPost(`users/login`, {
                email: emailLogin,
                password: passwordLogin
            });


            if (res.status) {
                saveUser(res.user)
                navigate('/dashboard')
            } else {
                setErrorMessage(res.message);
            }

        } catch (error) {
            console.error(error);
            setErrorMessage("Ocurrió un error al iniciar sesión")
        }
    }


    function saveUser(user) {
        localStorage.setItem("id", user._id);
        localStorage.setItem("email", user.email);
        localStorage.setItem("fullName", user.fullName);

    }

    return <>
        <header className="header">
            <div>
                <Link className="logo-link" to='/'>
                    <h3>Logo</h3>
                </Link>
            </div>
        </header>

        <div className="section portal-section">
            <div>
                <h2 className="h2-sans">¡Bienvenido/a!</h2>
                <span>Ingresa tus datos para iniciar sesión en tu cuenta</span>
            </div>

            <div className="form">
                <div className="field-form">
                    <label className="small-text">Correo electrónico</label>
                    <input type="email" value={emailLogin} onChange={(e) => { setEmailLogin(e.target.value) }} required />
                </div>
                <div className="field-form">
                    <label className="small-text">Contraseña</label>
                    <input type="password" value={passwordLogin} onChange={(e) => { setPasswordLogin(e.target.value) }} required />
                </div>
                <button className="button" onClick={login}>Iniciar sesión</button>
                <div>
                    <Link className="internal-link" to='/registrarse'>Aún no tengo cuenta</Link>
                </div>
                <p className="small-text feedback-error">{errorMessage}</p>

            </div>
        </div>
    </>
}