

export function Section1DB({ weddings, setWeddings, selectedWedding, setSelectedWedding }) {

    function selectWedding(e) {
        let value = e.target.value;

        let wedding = weddings.find(w => w._id === value);
        setSelectedWedding(wedding)
    }

    return <div id="section1-dasboard" className="section">
        <div>
            <span className="small-text">{selectedWedding.role}</span>
            <h2 id="title-dashboard" className="h2-sansserif">Boda de {selectedWedding.brideName} & {selectedWedding.groomName}</h2>

            <select onChange={selectWedding}>
                {weddings.map(w => {
                    return <>
                        <option key={w._id} value={w._id}>{w.brideName} & {w.groomName}</option>
                    </>
                })}
            </select>


            <h4 className="h4-sansserif">Listado de invitados</h4>
        </div>
        <div id="summary-panel">
            <div className="summary-box">
                <span className="small-text">Total personas</span>
                <div className="summary-row2">
                    <i className="fa-regular fa-user summary-i"></i>
                    <span className="num-summary">20</span>
                </div>
            </div>
            <div className="summary-box">
                <span className="small-text">Total personas</span>
                <div className="summary-row2">
                    <i className="fa-regular fa-user summary-i"></i>
                    <span className="num-summary">20</span>
                </div>
            </div>
            <div className="summary-box">
                <span className="small-text">Total personas</span>
                <div className="summary-row2">
                    <i className="fa-regular fa-user summary-i"></i>
                    <span className="num-summary">20</span>
                </div>
            </div>
        </div>
    </div>
}