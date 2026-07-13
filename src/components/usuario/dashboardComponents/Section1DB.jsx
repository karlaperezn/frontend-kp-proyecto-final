

export function Section1DB({ weddings, setWeddings, selectedWedding, setSelectedWedding, guestsResponses }) {

    function selectWedding(e) {
        let value = e.target.value;

        let wedding = weddings.find(w => w._id === value);
        setSelectedWedding(wedding)
    }

    const totalResp = guestsResponses.filter(g => g._id).length.toString().padStart(2, '0');
    const confirmed = guestsResponses.filter(g => g.attending === true).length.toString().padStart(2, '0');
    const declined = guestsResponses.filter(g => g.attending === false).length.toString().padStart(2, '0');

    

    return <div id="section1-dasboard" className="section">
        <div>

            <h2 className="h2-sansserif">Gestión de invitados</h2>

            <select onChange={selectWedding} className="dropdown-weddings">
                <option value="">Elige una boda</option>
                {weddings.map(w => {
                    return <>
                        <option key={w._id} value={w._id}><i class="fa-solid fa-heart"></i> Boda de {w.brideName} & {w.groomName} ({w.role})</option>
                    </>
                })}
                <option value="">+ Crea una nueva invitación</option>
            </select>
        </div>
        <div id="summary-panel">
            <div className="summary-box">
                <span className="small-text">Total personas</span>
                <div className="summary-row2">
                    <i className="fa-regular fa-user summary-i" />
                    <span className="num-summary">{totalResp}</span>
                </div>
            </div>
            <div className="summary-box">
                <span className="small-text">Confirmados</span>
                <div className="summary-row2">
                    <i class="fa-regular fa-circle-check summary-i" />
                    <span className="num-summary">{confirmed}</span>
                </div>
            </div>
            <div className="summary-box">
                <span className="small-text">No asistirán</span>
                <div className="summary-row2">
                    <i class="fa-regular fa-circle-xmark summary-i" />
                    <span className="num-summary">{declined}</span>
                </div>
            </div>
        </div>
    </div>
}