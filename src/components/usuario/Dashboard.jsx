import "../../CSS/usuario.css"
import { doDelete } from "../../services/api.services";
import { Link } from "react-router-dom";
import { Section1DB } from "./dashboardComponents/Section1DB";
import { Section2DB } from "./dashboardComponents/Section2DB";


export function Dashboard({ weddings, setWeddings, selectedWedding, setSelectedWedding, guestsResponses, setGuestsResponses, collabs, setCollabs }) {
    const fullName = localStorage.getItem('fullName');
    const userId = localStorage.getItem('id');
    const esCollab = selectedWedding?.role === "viewer";

    async function leaveCollab(collabId) {
        try {
            const res = await doDelete(`collabs/delete-collab/${collabId}`);

            if (res && res.status) {
                const activeId = selectedWedding._id;
                setWeddings((prevWeddings) => prevWeddings.filter(w => w._id !== activeId));

                setSelectedWedding(null);
                setGuestsResponses([]);
                setCollabs([]);
                localStorage.removeItem("selectedWeddingId");
            }
        } catch (error) {
            console.error("Error al dejar de colaborar:", error);
        }
    }

    async function deleteWedding(weddingId) {
        try {
            const res = await doDelete(`weddings/delete-wedding/${weddingId}`);
            if (res && res.status) {
                setSelectedWedding(null);
                setGuestsResponses([]);
                setCollabs([]);
                localStorage.removeItem("selectedWeddingId");
            } else {
                alert(res.message || "No se pudo eliminar la invitación.");
            }
        } catch (error) {
            console.error("Error al eliminar la boda en el frontend:", error);
            alert("Hubo un problema de conexión con el servidor.");
        }
    }

    return <>
        <header id="header-dashboard" className="header">
            <div><h3>Logo</h3></div>

            <div className="navBar">
                <p style={{ cursor: "pointer" }}><strong>Panel RSVP</strong></p>

                {selectedWedding && selectedWedding._id && (
                    <Link to={`/invitacion/${selectedWedding.slug}`} target="_blank"
                        rel="noopener noreferrer">Ver invitación</Link>
                )}

                {(!selectedWedding || !selectedWedding._id) && (
                    <div className="tooltip-container">
                        <p style={{ color: "#d3cbbc", cursor: "default" }}>Ver invitación</p>
                        <span className="tooltip-text">Primero elige una boda</span>
                    </div>
                )}
                <p>|</p>
                <Link className="strong">{fullName}</Link>
                <div className="avatarProfile"><i className="fa-solid fa-user" /></div>
            </div>

        </header>


        <Section1DB weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} guestsResponses={guestsResponses} setGuestsResponses={setGuestsResponses} collabs={collabs} setCollabs={setCollabs} />
        <Section2DB guestsResponses={guestsResponses} selectedWedding={selectedWedding} collabs={collabs} setCollabs={setCollabs} />
        <div className="section">
            {esCollab && selectedWedding !== null && (
                <button className="internal-link delete" onClick={() => leaveCollab(selectedWedding?.collabId)}>Dejar de colaborar</button>
            )}
            {!esCollab && selectedWedding && selectedWedding._id && (
                <button className="internal-link delete" onClick={() => deleteWedding(selectedWedding?._id)}>Eliminar invitación</button>
            )}
        </div>
    </>
}