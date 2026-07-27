
export function UbicacionIB({ inviteValues }) {
    const textDate = new Date(inviteValues.eventDate).toLocaleDateString('es-Es', { weekday: 'long', day: 'numeric', month: 'long'
    }).replace(',', '');
    const formattedDate = textDate.charAt(0).toUpperCase() + textDate.slice(1);

    return <div id="location-section" className="section-row location-section">

        <div className="location-column">
            <h2>Ceremonia</h2>

            <div className="info-location">
                <h3>{inviteValues.ceremony.place}</h3>
                <p>{inviteValues.ceremony.address}</p>
            </div>

            <p>{formattedDate} - {inviteValues.ceremony.hour}</p>

        </div>

        <div className="location-column divider-line">
            <h2>Recepción</h2>

            <div className="info-location">
                <h3>{inviteValues.reception.place}</h3>
                <p>{inviteValues.reception.address}</p>
            </div>

            <p>{formattedDate} - {inviteValues.reception.hour}</p>
                
        </div>
    </div>
}