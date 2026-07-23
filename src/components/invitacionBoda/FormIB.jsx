import { useState } from "react"
import { doPost } from "../../services/api.services";

export function FormIB({ inviteValues }) {
    const [sendedMessage, setSendedMessage] = useState(false);
    const [errors, setErrors] = useState({});
    const optionsDietary = ['Sin gluten / Celíaco', 'Sin lactosa', 'Vegetariano', 'Vegano', 'Alergia a frutos secos', 'Alergia a mariscos']

    const [formGuestResponse, setFormGuestResponse] = useState({
        weddingId: inviteValues._id,
        fullName: '',
        email: '',
        attending: null,
        dietaryRestrictions: [],
        guestMessage: ''
    })


    const handleChanges = (e) => {
        const { name, value } = e.target;
        const finalValue = name === "attending" ? (value === "true") : value;
        setFormGuestResponse({
            ...formGuestResponse,
            [name]: finalValue
        })
    }

    function toggleRestriction(option) {
        setFormGuestResponse(prev => ({
            ...prev,
            dietaryRestrictions: prev.dietaryRestrictions.includes(option)
                ? prev.dietaryRestrictions.filter(r => r !== option)
                : [...prev.dietaryRestrictions, option]
        }));
    }

    async function sendResponse() {

        let currentErrors = {};
        if (!formGuestResponse.fullName.trim()) {
            currentErrors.fullName = "El nombre completo es obligatorio.";
        }

        if (!formGuestResponse.email.trim()) {
            currentErrors.email = "El correo electrónico es obligatorio.";
        }
        if (formGuestResponse.attending === null) {
            currentErrors.attending = "Confirmar la asistencia es obligatorio.";
        }

        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
            return;
        }

        setErrors({});
        try {
            const res = await doPost('guests/register-response', {
                ...formGuestResponse
            })
            if (res.status) {
                setSendedMessage(true)
            }

        } catch (error) {
            console.error(error);
        }

    }

    return <div className="section rsvp-form-section">

        <h2>Confirmación</h2>

        <div className="rsvp-form">
            <div className="rsvp-field-form">
                <label htmlFor="guestFullName" >Nombre completo</label>
                <input type="text" className="rsvp-input" name="fullName" value={formGuestResponse.fullName} id="guestFullName" onChange={handleChanges} required />
                {errors.fullName && <span className="feedback-error">{errors.fullName}</span>}
            </div>
            <div className="rsvp-field-form">
                <label htmlFor="guestEmail">Correo electrónico</label>
                <input type="email" className="rsvp-input" name="email" id="guestEmail" value={formGuestResponse.email} onChange={handleChanges} required />
                {errors.email && <span className="feedback-error">{errors.email}</span>}
            </div>
            <div className="rsvp-field-form">
                <label>¿Asistirás?</label>
                <div className="container-options-attending">
                    <div className="option-attending">
                        <input type="radio" id="asistire" name="attending" value={true} checked={formGuestResponse.attending === true} onChange={handleChanges} />
                        <label htmlFor="asistire">Sí, asistiré</label>
                    </div>
                    <div className="option-attending">
                        <input type="radio" id="no-asistire" name="attending" value={false} checked={formGuestResponse.attending === false} onChange={handleChanges} />
                        <label htmlFor="no-asistire">No podré asistir</label>
                    </div>
                </div>
                {errors.attending && <span className="feedback-error">{errors.attending}</span>}
            </div>
            <div className="rsvp-field-form">
                {formGuestResponse.attending && (<>
                    <label>¿Tienes alergias y/o restricciones alimentarias?</label>
                    <div className="container-options-dietary">
                        {optionsDietary.map(option => {
                            return <label key={option}>
                                <input type="checkbox"
                                    checked={formGuestResponse.dietaryRestrictions.includes(option)}
                                    onChange={() => toggleRestriction(option)}
                                />
                                {option}
                            </label>
                        })}
                    </div>
                </>)}

            </div>
            <div id="textareaGuest" className="rsvp-field-form">
                <label htmlFor="guestMessage" >Mensaje para los novios (opcional)</label>
                <textarea name="guestMessage" className="rsvp-textarea" id="guestMessage" value={formGuestResponse.guestMessage || ""} onChange={handleChanges} />
            </div>
            <button className="rsvp-button" onClick={sendResponse}>Enviar respuesta</button>
            {sendedMessage && (
                <div style={{ display: "flex", flexDirection: "row", alignItems: "left", width: "100%" }}>
                    <p className="feedback-success" style={{ textAlign: "left" }}>Tu respuesta ha sido enviada.</p>
                </div>
            )}
        </div>
    </div>
}