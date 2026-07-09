import { Link } from "react-router-dom"
import { doPost } from "../services/api.services";

export function IniciarSesion({ emailLogin, setEmailLogin, passwordLogin, setPasswordLogin }) {

    async function login() {
        const res = await doPost(`users/login`, {
            email: emailLogin,
            password: passwordLogin
        });
        if (res.status) {
            saveUser(res.verifiedUser)
        }
    }

    function saveUser(user) {
        localStorage.setItem("id", user._id);
        localStorage.setItem("email", user.email);
        localStorage.setItem("fullName", user.fullName);
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
            <h2 className="h2-sansserif">¡Bienvenido/a!</h2>
            <span>Ingresa tus datos para iniciar sesión en tu cuenta</span>

            <div className="basic-form">
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

            </div>
        </div>
    </div>
}