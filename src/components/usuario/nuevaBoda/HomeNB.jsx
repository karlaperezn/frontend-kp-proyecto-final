
export function HomeNB({newWedding, setNewWedding, handleChanges}){

    return <>
    <div className="hero-section">
        <div className="contenido-hero">
            
            <div className="title-hero">
            <span className="h3-wedding">Nos casamos</span>
            
            <div id="title-wedding">
                <input type="text" className="h1-wedding inputW-edit brideName-input" name="brideName" value={newWedding.brideName} onChange={(e) => handleChanges(e)}/>
                <span className="h1-wedding">&</span>
                <input type="text" className="h1-wedding inputW-edit groomName-input" name="groomName"  value={newWedding.groomName} onChange={(e) => handleChanges(e)}/>
            </div>

            <input type="date" className="h3-wedding inputW-edit" id="inputW-hero-date" name="eventDate" value={newWedding.eventDate} onChange={(e) => handleChanges(e)}/>
            </div>
            <h3 id="subtitle-hero" className="h3-wedding">Nos encantaría pasar este día tan especial contigo</h3>
            <i id="icon-down-hero" className="fa-solid fa-angle-down"></i>
        </div>

    </div>
    
    </>
}