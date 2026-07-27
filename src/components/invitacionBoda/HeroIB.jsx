
export function HeroIB({ inviteValues }) {

    return <>
        <div className="hero-section hero-background hero-wedding">
            <div className="hero-content">

                <div id="hero-row1">
                    <h4>Nos casamos</h4>
                    <h1>{inviteValues.brideName} & {inviteValues.groomName}</h1>
                    <h4>{inviteValues.eventDate ? new Date(inviteValues.eventDate + "T00:00:00").toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                    })
                        : "Fecha no definida"}</h4>
                </div>

                <div id="hero-row2">
                    <h4>Nos encantaría pasar este día tan especial contigo</h4>
                    <i className="fa-solid fa-angle-down" />
                </div>

            </div>

        </div>

    </>
}