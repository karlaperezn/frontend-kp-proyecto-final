

export function FormNB() {

    return <div id="form-section" classname="section">
        <h2 className="h2-wedding">Confirma tu asistencia</h2>
        <div id="formW" className="basic-form">
            <div className="field-form">
                <label htmlFor="guestFullName">Nombre completo</label>
                <input type="text" name="fullName" id="guestFullName" />
            </div>
            <div className="field-form">
                <label htmlFor="guestEmail">Correo electrónico</label>
                <input type="text" name="email" id="guestEmail" />
            </div>
            <div className="field-form">
                <label>¿Asistirás?</label>
                <div id="container-options-attending">
                    <div className="option-attending">
                        <input type="radio" id="asistire" name="attending" />
                        <label className="small-text-wedding" htmlFor="asistire">Sí, asistiré</label>
                    </div>
                    <div className="option-attending">
                        <input type="radio" id="no-asistire" name="attending" />
                        <label className="small-text-wedding" htmlFor="no-asistire">No podré asistir</label>
                    </div>
                </div>
            </div>
            <div className="field-form">
                <label>Alergias y restricciones alimentarias</label>

                <div id="container-options-dietary">
                    <div id="dietary-col1" className="dietary-column">
                        <div className="option-dietary">
                            <input type="checkbox" id="celiaco" name="dietaryRestrictions" />
                            <label className="small-text-wedding" htmlFor="celiaco">Sin gluten / Celíaco</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="sinLactosa" name="dietaryRestrictions" />
                            <label className="small-text-wedding" htmlFor="sinLactosa">Sin lactosa</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="vegetariano" name="dietaryRestrictions" />
                            <label className="small-text-wedding" htmlFor="vegetariano">Vegetariano</label>
                        </div>

                    </div>
                    <div id="dietary-col2" className="dietary-column">
                        <div className="option-dietary">
                            <input type="checkbox" id="vegano" name="dietaryRestrictions" />
                            <label className="small-text-wedding" htmlFor="vegano">Vegano</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="frutosSecos" name="dietaryRestrictions" />
                            <label className="small-text-wedding" htmlFor="frutosSecos">Alergia a frutos secos</label>
                        </div>
                        <div className="option-dietary">
                            <input type="checkbox" id="mariscos" name="dietaryRestrictions" />
                            <label className="small-text-wedding" htmlFor="mariscos">Alergia a mariscos</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="textareaGuest" className="field-form">
                <label htmlFor="guestMessage">Mensaje para los novios (opcional)</label>
                <textarea name="guestMessage" className="small-text-wedding" id="guestMessage" />
            </div>

        </div>
    </div>


}