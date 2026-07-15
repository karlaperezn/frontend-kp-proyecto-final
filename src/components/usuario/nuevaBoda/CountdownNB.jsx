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


    return <div id="countdown-section" className="section">
        <h2 className="h2-script">Conteo regresivo</h2>
        <div id="countdown-row">
            <div className="countdown-box">
                <span className="h3-sansserif">{timeLeft.days}</span>
                <span>días</span>
            </div>
            <div className="countdown-box">
                <span className="h3-sansserif">{timeLeft.hours}</span>
                <span>horas</span>
            </div>
            <div className="countdown-box">
                <span className="h3-sansserif">{timeLeft.mins}</span>
                <span>minutos</span>
            </div>
            <div className="countdown-box">
                <span className="h3-sansserif">{timeLeft.secs}</span>
                <span>segundos</span>
            </div>
        </div>
    </div>
}