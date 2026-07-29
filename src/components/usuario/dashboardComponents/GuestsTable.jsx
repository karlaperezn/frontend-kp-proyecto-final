import { useState } from "react";

export function GuestsTable({ guestsResponses }) {

    const porPagina = 7;
    const [pagina, setPagina] = useState(1);

    const totalPaginas = Math.ceil(guestsResponses.length / porPagina);
    const inicio = (pagina - 1) * porPagina;
    const fin = inicio + porPagina;
    const respuestasPagina = guestsResponses.slice(inicio, fin);

    const esPrimeraPagina = pagina === 1;
    const esUltimaPagina = pagina === totalPaginas || totalPaginas === 0;

    return <>
        <div id="guests-table">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th id="guest-index">NO.</th>
                            <th className="title-table">NOMBRE</th>
                            <th className="title-table"> CORREO ELECTRÓNICO</th>
                            <th id="attending">ASISTENCIA</th>
                            <th className="title-table">MENSAJE</th>
                        </tr>
                    </thead>
                    {respuestasPagina.map((g, i) => {
                        return <tbody>
                            <tr>
                                <td ><strong>{(inicio + i + 1).toString().padStart(2, '0')}</strong></td>
                                <td className="small-text">{g.fullName}</td>
                                <td className="small-text">{g.email}</td>
                                <td className="small-text">{g.attending ? <i class="fa-solid fa-circle-check" /> : <i class="fa-regular fa-circle-xmark" />}</td>
                                <td className="small-text">{g.guestMessage}</td>
                            </tr>
                        </tbody>
                    })}
                </table>

            </div>
            <div id="container-buttons-guests-page">
                <button
                    className={`internal-link ${esPrimeraPagina ? 'disabled' : ''}`}
                    disabled={esPrimeraPagina}
                    onClick={() => setPagina(prev => prev - 1)}
                >
                    Anterior
                </button>

                <span className="small-text">
                    Página {totalPaginas === 0 ? 0 : pagina} de {totalPaginas}
                </span>

                <button
                    className={`internal-link ${esUltimaPagina ? 'disabled' : ''}`}
                    disabled={esUltimaPagina}
                    onClick={() => setPagina(prev => prev + 1)}
                >
                    Siguiente
                </button>
            </div>
        </div>
        <div id="guests-cards">
            {guestsResponses.map((g, i) => {
                return <div className="guest-card">
                    <div className="guest-card-col1">
                        <div className="h3-sans card-guest-index"> <strong>{(i + 1).toString().padStart(2, '0')}</strong></div>

                        <div>
                            <p>{g.fullName}</p>
                            <p className="xsmall-text">{g.email}</p>
                        </div>

                    </div>

                    <div className="guest-card-col2">
                        <p className="h3-sans message-icon">{g.guestMessage ? <i class="fa-regular fa-envelope"></i> : ""}</p>
                        <div className={g.attending ? "si-asiste" : "no-asiste"}>
                            <p className="small-text">{g.attending ? "Sí asiste" : "No asiste"}</p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </>
}