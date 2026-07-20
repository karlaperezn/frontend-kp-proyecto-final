
export function UbicacionWE({ weddingData, handleChanges }) {

    const textDate = new Date(weddingData.eventDate).toLocaleDateString('es-Es', { weekday: 'long', day: 'numeric', month: 'long'
    }).replace(',', '');
    const formattedDate = textDate.charAt(0).toUpperCase() + textDate.slice(1);

    return <div id="location-section-w" className="section">
        <div id="ceremony" className="location-column">
            <h2 className="h2-NB">Ceremonia</h2>
            <div className="info-location">
                <textarea type="text" className="h4-NB inputW-edit inputW-place" name="ceremony.place" value={weddingData.ceremony.place} onChange={(e) => handleChanges(e)}/>
                <textarea type="text" className="paragraph-NB inputW-edit inputW-address" name="ceremony.address" value={weddingData.ceremony.address} onChange={(e) => handleChanges(e)}/>
            </div>
            <div className="container-dateW">
                <p className="paragraph-NB">{formattedDate}</p>
                <p className="paragraph-NB">-</p>
                <input type="text" className="paragraph-NB inputW-edit inputW-location-date" name="ceremony.hour" value={weddingData.ceremony.hour} onChange={(e) => handleChanges(e)}/>
            </div>

        </div>
        <div id="reception" className="location-column divider-line-NB">
            <h2 className="h2-NB">Recepción</h2>
            <div className="info-location">

                <textarea type="text" className="h4-NB inputW-edit inputW-place" name="reception.place" value={weddingData.reception.place} onChange={(e) => handleChanges(e)}/>
                <textarea type="text" className="paragraph-NB inputW-edit inputW-address" name="reception.address" value={weddingData.reception.address} onChange={(e) => handleChanges(e)}/>
            </div>
            <div className="container-dateW">
                <p className="paragraph-NB">{formattedDate}</p>
                <p className="paragraph-NB">-</p>
                <input type="text" className="paragraph-NB inputW-edit inputW-location-date" name="reception.hour" value={weddingData.reception.hour} onChange={(e) => handleChanges(e)}/>
            </div>
            
        </div>
    </div>
}