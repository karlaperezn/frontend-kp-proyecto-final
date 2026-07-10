
export function Section1DB({weddings, setWeddings}){


    return <div id="section1-dasboard" className="section">
            <div>
                <h2 className="h2-sansserif">Boda de {weddings[0].brideName} & {weddings[0].groomName}</h2>
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