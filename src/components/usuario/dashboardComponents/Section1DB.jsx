import { Link } from "react-router-dom";

export function Section1DB({ weddings, setWeddings, selectedWedding, setSelectedWedding, guestsResponses, setGuestsResponses }) {

    function selectWedding(e) {
        let value = e.target.value;
        if (value === "") {
            setSelectedWedding([])
            setGuestsResponses([])
            return;
        }
        let wedding = weddings.find(w => w._id === value);
        setSelectedWedding(wedding)
    }

    const totalResp = guestsResponses.filter(g => g._id).length.toString().padStart(2, '0');
    const confirmed = guestsResponses.filter(g => g.attending === true).length.toString().padStart(2, '0');
    const declined = guestsResponses.filter(g => g.attending === false).length.toString().padStart(2, '0');

    return <section className="section-row section-dasboard">
        <div>

            <h2 className="h2-sans">Gestión de invitados</h2>

            <div id="dashbord-section-row2">
                <div id="wedding-manager">
                    <div>
                        <select onChange={selectWedding} id="dropdown-weddings">
                            <option value="">Elige una boda</option>
                            {weddings.map(w => {
                                return <>
                                    <option key={w._id} value={w._id}>Boda de {w.brideName} & {w.groomName} ({w.role})</option>
                                </>
                            })}
                        </select>

                    </div>

                    <Link to='/dashboard/nueva-boda' className="button button-alt2">Nueva invitación</Link>
                </div>
                {selectedWedding && selectedWedding._id && (<>
                    <div className="dashboard-actions">
                        <Link to={`/dashboard/editar/${selectedWedding._id}`} ><i className="fa-regular fa-pen-to-square" /> Editar invitación</Link>

                    </div>

                </>
                )}
            </div>


        </div>
        <div id="summary-panel">
            <div className="summary-box">
                <span className="small-text">Respuestas</span>
                <div className="summary-row2">
                    <i className="fa-regular fa-user summary-i" />
                    <span className="summary-num">{totalResp}</span>
                </div>
            </div>
            <div className="summary-box">
                <span className="small-text">Confirmados</span>
                <div className="summary-row2">
                    <i class="fa-regular fa-circle-check summary-i" />
                    <span className="summary-num">{confirmed}</span>
                </div>
            </div>
            <div className="summary-box">
                <span className="small-text">No asistirán</span>
                <div className="summary-row2">
                    <i class="fa-regular fa-circle-xmark summary-i" />
                    <span className="summary-num">{declined}</span>
                </div>
            </div>
        </div>
    </section>
}