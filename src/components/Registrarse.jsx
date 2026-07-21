import "../CSS/portal.css"
import { Link } from "react-router-dom"
import { useState } from "react";
import { doPost } from "../services/api.services.js";

export function Registrarse({ valuesNewUser, setValuesNewUser }) {

    const [status, setStatus] = useState()
    const [message, setMessage] = useState('')

    const handleChanges = (e) => {
        setValuesNewUser({ ...valuesNewUser, [e.target.name]: e.target.value })
    }

    const signUpUser = async (e) => {
        e.preventDefault()

        try {
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
                setStatus("positive")
                setMessage("¡Listo! Ya puedes acceder a tu cuenta")
            } else {
                setStatus("negative")
                setMessage(res.message)
            }
        } catch (error) {
            setStatus("negative")
            setMessage("Ocurrió un error al registrar el usuario")
        }
    }

    return <>
        <header className="header">
            <div>
                <Link className="logo-link" to='/'>
                    <h3>Logo</h3>
                </Link>
            </div>
        </header>


        <section className="section portal-section">
            <div>
                <h2 className="h2-sans">Crea tu cuenta</h2>
                <span className="paragraph">Regístrate gratis para crear tu invitación de boda digital</span>
            </div>

            <div className="form">
                <div className="field-form">
                    <label>Nombre completo</label>
                    <input type="text" value={valuesNewUser.nameRegister} name="nameRegister" onChange={(e) => handleChanges(e)} required />
                </div>
                <div className="field-form">
                    <label>Correo electrónico</label>
                    <input type="email" value={valuesNewUser.emailRegister} name="emailRegister" onChange={(e) => handleChanges(e)} required />
                </div>
                <div className="field-form">
                    <label>Contraseña</label>
                    <input type="password" value={valuesNewUser.passwordRegister} name="passwordRegister" onChange={(e) => handleChanges(e)} required />
                </div>
                <div className="field-checkbox">
                    <input type="checkbox" id="terms-policy" />
                    <label htmlFor="terms-policy">Acepto los términos y condiciones</label>
                </div>

                <button className="button" onClick={signUpUser}>Crear cuenta</button>

                <div>
                    <Link className="internal-link" to='/iniciar-sesion'>Ya tengo cuenta</Link>
                </div>

                <p className={`small-text ${status === "positive" ? "feedback-success" : "feedback-error"}`}>{message}</p>

            </div>
        </section>
    </>
}