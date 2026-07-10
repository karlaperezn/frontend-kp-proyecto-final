import { Link } from "react-router-dom"

export function HeaderUser() {
    const fullName = localStorage.getItem('fullName')

    return <header>
        <div>
            <Link className="logo-link" to='/'>
                <h3 className="h3-sansserif">Logo</h3>
            </Link>
        </div>
        <div className="navBar">
            <p>Panel RSVP</p>
            <p>Ver invitación</p>
            <p>|</p>
            {/* Pendiente de volverlo link */} <p>{fullName}</p>
            <div className="avatarProfile"><i className="fa-regular fa-user"></i></div>
        </div>
    </header>
}