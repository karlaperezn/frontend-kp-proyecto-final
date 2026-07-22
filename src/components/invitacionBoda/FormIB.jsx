
export function FormIB() {

    return <div className="section rsvp-form-section">

        <h2>Confirmación</h2>

        <div className="rsvp-form">
            <div className="rsvp-field-form">
                <label htmlFor="guestFullName" >Nombre completo</label>
                <input type="text" className="rsvp-input" name="fullName" id="guestFullName" />
            </div>
            <div className="rsvp-field-form">
                <label htmlFor="guestEmail">Correo electrónico</label>
                <input type="text" className="rsvp-input" name="email" id="guestEmail" />
            </div>
            <div className="rsvp-field-form">
                <label>¿Asistirás?</label>
                <div className="container-options-attending">
                    <div className="option-attending">
                        <input type="radio" id="asistire" name="attending" />
                        <label htmlFor="asistire">Sí, asistiré</label>
                    </div>
                    <div className="option-attending">
                        <input type="radio" id="no-asistire" name="attending" />
                        <label htmlFor="no-asistire">No podré asistir</label>
                    </div>
                </div>
            </div>
            <div className="rsvp-field-form">
                <label>Alergias y restricciones alimentarias</label>

                <div className="container-options-dietary">
                    <div className="dietary-column">
                        <div className="option-dietary">
                            <input type="checkbox" id="celiaco" name="dietaryRestrictions" />
                            <label htmlFor="celiaco">Sin gluten / Celíaco</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="sinLactosa" name="dietaryRestrictions" />
                            <label htmlFor="sinLactosa">Sin lactosa</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="vegetariano" name="dietaryRestrictions" />
                            <label htmlFor="vegetariano">Vegetariano</label>
                        </div>

                    </div>
                    <div className="dietary-column">
                        <div className="option-dietary">
                            <input type="checkbox" id="vegano" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="vegano">Vegano</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="frutosSecos" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="frutosSecos">Alergia a frutos secos</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="mariscos" name="dietaryRestrictions" />
                            <label htmlFor="mariscos">Alergia a mariscos</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="textareaGuest" className="rsvp-field-form">
                <label htmlFor="guestMessage" >Mensaje para los novios (opcional)</label>
                <textarea name="guestMessage" className="rsvp-textarea" id="guestMessage" />
            </div>
            <button className="rsvp-button">Enviar respuesta</button>
        </div>
    </div>
}