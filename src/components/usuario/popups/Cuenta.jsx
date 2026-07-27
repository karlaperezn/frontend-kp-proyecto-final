import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doPut } from "../../../services/api.services";

export function Cuenta({ togglePopUp }) {
    const fullName = localStorage.getItem('fullName');
    const email = localStorage.getItem('email');
    const userId = localStorage.getItem('id');
    const navigate = useNavigate()

    const [editName, setEditName] = useState(fullName)
    const [editEmail, setEditEmail] = useState(email)
    const [editPassword, setEditPassword] = useState('')

    const [message, setMessage] = useState('')

    async function updateProfile() {
        setMessage('')
        try {
            const res = await doPut(`users/update-user/${userId}`, {
                fullName: editName,
                email: editEmail,
                password: editPassword
            })

            if (res && res.status) {
                saveUser(res.updateData)
                setEditPassword('')
                setMessage(res.message)
            }

        } catch (error) {
            console.error(error)
            
        }

    }

    function saveUser(user) {
        localStorage.setItem("email", user.email);
        localStorage.setItem("fullName", user.fullName);

    }

    function logout(){
        localStorage.clear()
        navigate('/iniciar-sesion')
    }


    return <div id="pop-up-account" >
        <div id="container-account">
        <div className="back-button" onClick={togglePopUp}>
            <i className="fa-solid fa-circle-arrow-left" />
        </div>

        <div id="container-info-account">
            <div id="user-account">
                <div className="avatarProfile avatarCuenta"><i className="fa-solid fa-user" /></div>
                <div id="info-account">
                    <h2 className="h2-sans">{fullName}</h2>
                    <p>{email}</p>
                </div>
            </div>

            <div id="informacion-personal">
                <h3 className="h3-sans">Información personal</h3>
                <div className="field-form">
                    <label htmlFor="">Nombre completo</label>
                    <input type="text" value={editName} onChange={(e) => { setEditName(e.target.value) }} />
                </div>
                <div className="field-form">
                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" value={editEmail} onChange={(e) => { setEditEmail(e.target.value) }} />
                </div>

            </div>


            <div id="cambiar-contrasena">

                <h3 className="h3-sans">Cambiar contraseña</h3>

                <div className="field-form">
                    <label htmlFor="">Nueva contraseña</label>
                    <input type="password" value={editPassword} onChange={(e) => { setEditPassword(e.target.value) }} />
                </div>
            </div>

            <button className="button" onClick={updateProfile}>Guardar cambios</button>
            { message !== '' && (
                <div>
                    <p className="feedback-success">{message}</p>
                </div>
            )}

        </div>
        <div id="account-management">
            <button className="button button-alt2" onClick={logout}>Cerrar sesión</button>
            <button className="internal-link delete" >Eliminar cuenta</button>
        </div>

        </div>

    </div>
}