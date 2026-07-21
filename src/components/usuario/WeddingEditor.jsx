import "../../CSS/template.css";
import "../../CSS/paneldiseno.css";
import { doGet, doPost, doPut } from "../../services/api.services"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { HomeWE } from "./wedding-editor/HomeWE"
import { CountdownWE } from "./wedding-editor/CountdownWE"
import { UbicacionWE } from "./wedding-editor/UbicacionWE"
import { FormWE } from "./wedding-editor/FormWE"
import { PanelDisenoWE } from "./wedding-editor/PanelDisenoWE"


export function WeddingEditor({ modo, weddingData, setWeddingData, selectedWedding }) {
    const { weddingId } = useParams();
    const navigate = useNavigate()

    const handleChanges = (e) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [group, field] = name.split(".");
            setWeddingData(prev => ({
                ...prev,
                [group]: { ...prev[group], [field]: value }
            }));
        } else {
            setWeddingData(prev => ({ ...prev, [name]: value }));
        }
    };

    useEffect(() => {
        if (modo === "edit" && weddingId) {
            async function fetchWedding() {
                const res = await doGet(`weddings/${weddingId}`);
                setWeddingData(res.wedding)
            }
            fetchWedding()
        }
    }, [modo, weddingId])

    async function saveWedding() {
        if (modo === "create") {
            const userId = localStorage.getItem('id');
            const res = await doPost(`weddings/new-wedding`, {
                ownerId: userId,
                ...weddingData
            })
            if (res.status) navigate('/dashboard')
        } else {
            const res = await doPut(`/editar-boda/${weddingId}`, weddingData);
            if (res.status) navigate('/dashboard') 
        }
    }


    const [fontTitle, fontBody] = weddingData.design.tipography || [];
    const [color1, color2] = weddingData.design.colors || [];

    const fontSizH1 = (fontTitle === 'Luxurious Script') ? "128px" : (fontTitle === 'Cedarville Cursive') ? "96px" : "90px";
    const fontSizH2 = (fontTitle === 'Luxurious Script') ? "80px" : (fontTitle === 'Cedarville Cursive') ? "52px" : "36px";

    const [panelAbierto, setPanelAbierto] = useState(false);


    return <div id="wedding-web-body" style={{
        '--font-title-wedding': `'${fontTitle}', serif`,
        '--font-body-wedding': `'${fontBody}', sans-serif`,
        '--color-1-wedding': color1,
        '--color-2-wedding': color2,
        '--h1-fontSize': fontSizH1,
        '--h2-fontSize': fontSizH2,
    }}>
        <HomeWE weddingData={weddingData} handleChanges={handleChanges} />
        <CountdownWE weddingData={weddingData} />
        <UbicacionWE weddingData={weddingData} handleChanges={handleChanges} />
        <FormWE />

        <button
            className="boton-diseno"
            onClick={() => setPanelAbierto(true)}
        >
            <i class="fa-solid fa-palette"></i>  Diseño
        </button>
        <PanelDisenoWE abierto={panelAbierto} onClose={() => setPanelAbierto(false)} weddingData={weddingData} setWeddingData={setWeddingData} saveWedding={saveWedding} />
    </div>
}