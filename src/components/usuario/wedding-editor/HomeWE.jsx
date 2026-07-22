
export function HomeWE({ weddingData, handleChanges }) {

    return <>
        <div id="editor-hero-section" className="hero-section hero-background hero-wedding">
            <div className="hero-content">

                <div id="editor-hero-row1">
                    <span>Nos casamos</span>

                    <div id="couple-names">
                        <input type="text" id="editor-input-brideName" placeholder="María" name="brideName" value={weddingData.brideName} onChange={(e) => handleChanges(e)} />
                        <span>&</span>
                        <input type="text" name="groomName" placeholder="Pedro" value={weddingData.groomName} onChange={(e) => handleChanges(e)} />
                    </div>

                    <input type="date" name="eventDate" value={weddingData.eventDate} onChange={(e) => handleChanges(e)} />
                </div>

                <div id="editor-hero-row2">
                    <h4>Nos encantaría pasar este día tan especial contigo</h4>
                    <i className="fa-solid fa-angle-down" />
                </div>

            </div>

        </div>

    </>
}