import { useState } from "react";
import { doPost } from "../../../services/api.services"


export function Collabs({ selectedWedding }) {

    const [emailCollab, setEmailCollab] = useState("")
    const [message, setMessage] = useState('')
    const weddingId = selectedWedding._id;

    async function addCollab() {
        setMessage("")

        if(!emailCollab){
        setMessage("Coloca un correo electrónico.")
        return;
        }

        try {
            const res = await doPost(`collabs/${weddingId}/add-collab`, { emailCollab: emailCollab })
            if(res.status){
                setMessage("Colaborador añadido.")
            } else {
                setMessage("Este usuario no existe.")
            }

        } catch (error) {
            setMessage("Error al añadir colaborador.")
        }
        setEmailCollab("")
    }

    return <section id="collabs-dashboard" >
        <h3 className="h3-sans">Colaboradores</h3>
        <div id="add-collad">
            <div id="add-collad-field" className="field-form">
                <label htmlFor="">Nuevo colaborador</label>
                <input type="email" placeholder="Correo electrónico" value={emailCollab} onChange={(e) => { setEmailCollab(e.target.value) }} />
            </div>
            <button className="button" onClick={addCollab}><i className="fa-solid fa-user-plus" /> Añadir</button>
        </div>
            <p className={message === "Colaborador añadido." ? "feedback-success" : "feedback-error"}>{message}</p>
            <div id="collabs-cards">

            </div>
    </section>
}