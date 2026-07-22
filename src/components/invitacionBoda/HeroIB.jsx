
export function HeroIB({ inviteValues}) {

    return <>
        <div className="hero-section hero-background hero-wedding">
            <div className="hero-content">

                <div id="hero-row1">
                    <h4>Nos casamos</h4>
                    <h1>{inviteValues.brideName} & {inviteValues.groomName}</h1>
                    <h4>{inviteValues.eventDate}</h4>
                </div>

                <div id="hero-row2">
                    <h4>Nos encantaría pasar este día tan especial contigo</h4>
                    <i className="fa-solid fa-angle-down" />
                </div>

            </div>

        </div>

    </>
}