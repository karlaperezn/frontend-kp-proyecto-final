import { useState, useEffect } from "react";
import { doPost, doGet, doDelete } from "../../../services/api.services"


export function Collabs({ selectedWedding, collabs, setCollabs }) {
    const [emailCollab, setEmailCollab] = useState("")
    const [message, setMessage] = useState('')
    const esAdmin = selectedWedding?.role === "admin";

    useEffect(() => {
        if (!selectedWedding || !selectedWedding._id || Array.isArray(selectedWedding) || !esAdmin) {
            setCollabs([]);
            return;
        }
        async function fetchCollabs() {
            try {
                const res = await doGet(`collabs/show-collabs/${selectedWedding._id}`)
                if (res.status) {
                    setCollabs(res.collabs)
                }

            } catch (error) {
                console.error("Error al cargar colaboradores:", error);
            }
        }
        fetchCollabs()
    }, [selectedWedding, setCollabs, esAdmin])

    async function addCollab() {
        setMessage("")

        if (!emailCollab) {
            setMessage("Coloca un correo electrónico.")
            return;
        }

        try {
            const res = await doPost(`collabs/${selectedWedding._id}/add-collab`, { emailCollab: emailCollab })
            if (res.status) {
                setMessage("Colaborador añadido.")
                setCollabs(prev => [...prev, res.collabAdded]);
            } else {
                setMessage("Este usuario no existe.")
            }
        } catch (error) {
            console.error(error);
            setMessage("Error al añadir colaborador.")
        }
        setEmailCollab("")
    }

    async function deleteCollab(collabId) {
        try {
            const res = await doDelete(`collabs/delete-collab/${collabId}`)

            if (res.status) {
                setCollabs(prev => prev.filter(c => c._id !== collabId));
            } else {
                alert(res.message || "No se pudo eliminar al colaborador");
            }
        } catch (error) {
            console.error("Error al eliminar colaborador en el frontend:", error);

        }
    }

    useEffect(() => {
        if (!message) return;
        const timer = setTimeout(() => {
            setMessage("");
        }, 3000);
        return () => clearTimeout(timer);
    }, [message]);

    return <section id="collabs-dashboard" >
        {esAdmin && (<>
            <h3 className="h3-sans">Colaboradores</h3>
            <div id="add-collad">
                <div id="add-collad-field" className="field-form">
                    <label htmlFor="">Nuevo colaborador</label>
                    <input type="email" placeholder="Correo electrónico" value={emailCollab} onChange={(e) => { setEmailCollab(e.target.value) }} />
                </div>
                <button className="button" onClick={addCollab}><i className="fa-solid fa-user-plus" /> Añadir</button>
            </div>
            <div style={{height: "16px"}}>
                {message && (
                    <p className={message === "Colaborador añadido." ? "feedback-success" : "feedback-error"}>{message}</p>
                )}
            </div>

            <div id="collabs-cards">
                {collabs.map(c => {
                    return <div className="collab-card">
                        <p>{c.fullName}</p>
                        <button className="button button-small" onClick={() => deleteCollab(c._id)}>Quitar</button>
                    </div>
                })}
            </div>
        </>)}
    </section>
}