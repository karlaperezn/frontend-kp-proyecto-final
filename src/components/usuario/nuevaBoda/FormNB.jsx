

export function FormNB() {

    return <div id="form-section" classname="section">
        <h2 className="h2-NB">Confirmación</h2>
        <div id="formW" className="basic-form">
            <div className="field-form">
                <label htmlFor="guestFullName" className="title-field-NB" >Nombre completo</label>
                <input type="text" className="input-NB" name="fullName" id="guestFullName" />
            </div>
            <div className="field-form">
                <label htmlFor="guestEmail" className="title-field-NB" >Correo electrónico</label>
                <input type="text" className="input-NB" name="email" id="guestEmail" />
            </div>
            <div className="field-form">
                <label className="title-field-NB">¿Asistirás?</label>
                <div id="container-options-attending">
                    <div className="option-attending">
                        <input type="radio" id="asistire" name="attending" />
                        <label className="small-text-NB" htmlFor="asistire">Sí, asistiré</label>
                    </div>
                    <div className="option-attending">
                        <input type="radio" id="no-asistire" name="attending" />
                        <label className="small-text-NB" htmlFor="no-asistire">No podré asistir</label>
                    </div>
                </div>
            </div>
            <div className="field-form">
                <label className="title-field-NB">Alergias y restricciones alimentarias</label>

                <div id="container-options-dietary">
                    <div id="dietary-col1" className="dietary-column">
                        <div className="option-dietary">
                            <input className="checkbox-NB" type="checkbox" id="celiaco" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="celiaco">Sin gluten / Celíaco</label>
                        </div>
                        <div className="option-dietary">
                            <input className="checkbox-NB" type="checkbox" id="sinLactosa" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="sinLactosa">Sin lactosa</label>
                        </div>
                        <div className="option-dietary">
                            <input className="checkbox-NB" type="checkbox" id="vegetariano" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="vegetariano">Vegetariano</label>
                        </div>

                    </div>
                    <div id="dietary-col2" className="dietary-column">
                        <div className="option-dietary">
                            <input className="checkbox-NB" type="checkbox" id="vegano" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="vegano">Vegano</label>
                        </div>
                        <div className="option-dietary">
                            <input className="checkbox-NB" type="checkbox" id="frutosSecos" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="frutosSecos">Alergia a frutos secos</label>
                        </div>
                        <div className="option-dietary">
                            <input className="checkbox-NB" type="checkbox" id="mariscos" name="dietaryRestrictions" />
                            <label className="small-text-NB" htmlFor="mariscos">Alergia a mariscos</label>
                        </div>
                    </div>
                </div>
            </div>
            <div id="textareaGuest" className="field-form">
                <label htmlFor="guestMessage" className="title-field-NB" >Mensaje para los novios (opcional)</label>
                <textarea name="guestMessage" className="small-text-NB message-NB" id="guestMessage" />
            </div>
            <button className="button-NB">Enviar respuesta</button>
        </div>
    </div>


}