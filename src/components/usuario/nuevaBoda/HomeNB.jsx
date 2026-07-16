
export function HomeNB({newWedding, setNewWedding, handleChanges}){

    return <>
    <div className="hero-section">
        <div id="hero-w" className="contenido-hero">
            
            <div className="title-hero">
            <span className="h4-NB">Nos casamos</span>
            
            <div id="title-wedding">
                <input type="text" className="h1-NB inputW-edit brideName-input" name="brideName" value={newWedding.brideName} onChange={(e) => handleChanges(e)}/>
                <span className="h1-NB">&</span>
                <input type="text" className="h1-NB inputW-edit groomName-input" name="groomName"  value={newWedding.groomName} onChange={(e) => handleChanges(e)}/>
            </div>

            <input type="date" className="h4-NB inputW-edit" id="inputW-hero-date" name="eventDate" value={newWedding.eventDate} onChange={(e) => handleChanges(e)}/>
            </div>
            <h4 id="subtitle-hero" className="h4-NB">Nos encantaría pasar este día tan especial contigo</h4>
            <i id="icon-down-hero" className="fa-solid fa-angle-down"></i>
        </div>

    </div>
    
    </>
}