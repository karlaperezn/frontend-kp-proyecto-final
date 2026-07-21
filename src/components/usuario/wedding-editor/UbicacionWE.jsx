
export function UbicacionWE({ weddingData, handleChanges }) {

    const textDate = new Date(weddingData.eventDate).toLocaleDateString('es-Es', { weekday: 'long', day: 'numeric', month: 'long'
    }).replace(',', '');
    const formattedDate = textDate.charAt(0).toUpperCase() + textDate.slice(1);

    return <div id="editor-location-section" className="section-row location-section">

        <div className="location-column">
            <h2>Ceremonia</h2>

            <div className="editor-info-location">
                <textarea type="text" className="place-name" placeholder="Basílica de San Miguel" name="ceremony.place" value={weddingData.ceremony.place} onChange={(e) => handleChanges(e)}/>
                <textarea type="text" className="address" placeholder="Calle de San Justo, 4, Centro, 28005 Madrid" name="ceremony.address" value={weddingData.ceremony.address} onChange={(e) => handleChanges(e)}/>
            </div>

            <div className="editor-info-date">
                <p>{weddingData.eventDate ? formattedDate : "Lunes 17 de marzo"}</p>
                <p>-</p>
                <input type="text" className="editor-input-hour" placeholder="17:30" name="ceremony.hour" value={weddingData.ceremony.hour} onChange={(e) => handleChanges(e)}/>
            </div>

        </div>
        <div className="location-column editor-divider-line">
            <h2>Recepción</h2>

            <div className="editor-info-location">
                <textarea type="text" className="place-name" placeholder="Palacio del Negralejo" name="reception.place" value={weddingData.reception.place} onChange={(e) => handleChanges(e)}/>
                <textarea type="text" className="address" placeholder="Carretera de Mejorada, Km. 3, 28522 Rivas-Vaciamadrid" name="reception.address" value={weddingData.reception.address} onChange={(e) => handleChanges(e)}/>
            </div>

            <div className="editor-info-date">
                <p>{weddingData.eventDate ? formattedDate : "Lunes 17 de marzo"}</p>
                <p>-</p>
                <input type="text" className="editor-input-hour" placeholder="19:00" name="reception.hour" value={weddingData.reception.hour} onChange={(e) => handleChanges(e)}/>
            </div>
            
        </div>
    </div>
}