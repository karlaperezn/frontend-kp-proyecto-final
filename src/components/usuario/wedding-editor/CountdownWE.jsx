import { useState, useEffect } from "react"

export function CountdownWE({ weddingData }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, mins: 0, secs: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date().getTime();
            const weddingDate = new Date(weddingData.eventDate).getTime();
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
    }, [weddingData.eventDate])


    return <div className="section countdown-section">
        <h2>Conteo regresivo</h2>

        <div className="countdown-bow-container">
            <div className="countdown-box editor-countdown-box">
                <span>{timeLeft.days ? timeLeft.days : "365"}</span>
                <p>días</p>
            </div>
            <div className="countdown-box editor-countdown-box">
                <span>{timeLeft.hours ? timeLeft.hours : "12"}</span>
                <p>horas</p>
            </div>
            <div className="countdown-box editor-countdown-box">
                <span>{timeLeft.mins ? timeLeft.mins : "46"}</span>
                <p>minutos</p>
            </div>
            <div className="countdown-box editor-countdown-box">
                <span>{timeLeft.secs ? timeLeft.secs : "09"}</span>
                <p>segundos</p>
            </div>
        </div>
    </div>
}