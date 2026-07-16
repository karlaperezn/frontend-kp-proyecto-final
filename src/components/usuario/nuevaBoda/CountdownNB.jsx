import { useState, useEffect } from "react"

export function CountdownNB({ newWedding, setNewWedding }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, mins: 0, secs: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date().getTime();
            const weddingDate = new Date(newWedding.eventDate).getTime();
            const substract = weddingDate - today;

            if (substract <= 0) {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(substract / (1000 * 60 * 60 * 24)), 
                hours: Math.floor((substract % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 
                mins: Math.floor((substract % (1000 * 60 * 60)) / (1000 * 60)), 
                secs: Math.floor((substract % (1000 * 60)) / 1000)
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [newWedding.eventDate])


    return <div id="countdown-section-NB" className="section">
        <h2 className="h2-NB">Conteo regresivo</h2>
        <div id="countdown-row">
            <div className="countdown-box-NB">
                <span className="h3-NB">{timeLeft.days}</span>
                <span className="paragraph-NB">días</span>
            </div>
            <div className="countdown-box-NB">
                <span className="h3-NB">{timeLeft.hours}</span>
                <span className="paragraph-NB">horas</span>
            </div>
            <div className="countdown-box-NB">
                <span className="h3-NB">{timeLeft.mins}</span>
                <span className="paragraph-NB">minutos</span>
            </div>
            <div className="countdown-box-NB">
                <span className="h3-NB">{timeLeft.secs}</span>
                <span className="paragraph-NB">segundos</span>
            </div>
        </div>
    </div>
}