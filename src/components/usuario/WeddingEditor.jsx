import "../../CSS/weddingEditor.css"
import { doPost } from "../../services/api.services"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { HomeWE } from "./wedding-editor/HomeWE"
import { CountdownWE } from "./wedding-editor/CountdownWE"
import { UbicacionWE } from "./wedding-editor/UbicacionWE"
import { FormWE } from "./wedding-editor/FormWE" 
import { PanelDisenoWE } from "./wedding-editor/PanelDisenoWE"


export function WeddingEditor({ newWedding, setNewWedding }) {

    const navigate = useNavigate()

    const handleChanges = (e) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [group, field] = name.split(".");
            setNewWedding(prev => ({
                ...prev,
                [group]: { ...prev[group], [field]: value }
            }));
        } else {
            setNewWedding(prev => ({ ...prev, [name]: value }));
        }
    };

    const saveNewWedding = async (e) => {
        e.preventDefault()

        const userId = localStorage.getItem('id');

        const res = await doPost(`weddings/new-wedding`, {
            ownerId: userId,
            ...newWedding
        })

        if (res.status) {
            navigate('/dashboard')
        } else {
            alert(res.message)
        }


    }

    const [fontTitle, fontBody] = newWedding.design.tipography || [];
    const [color1, color2] = newWedding.design.colors || [];

    const fontSizH1 = (fontTitle === 'Luxurious Script') ? "128px" : (fontTitle === 'Cedarville Cursive') ? "96px" : "90px";

    const fontSizH2 = (fontTitle === 'Luxurious Script') ? "80px" : (fontTitle === 'Cedarville Cursive') ? "52px" : "36px";

    const [panelAbierto, setPanelAbierto] = useState(false);


    return <div style={{
        '--font-title-wedding': `'${fontTitle}', serif`,
        '--font-body-wedding': `'${fontBody}', sans-serif`,
        '--color-1-wedding': color1,
        '--color-2-wedding': color2,
        '--h1-fontSize' : fontSizH1,
        '--h2-fontSize' : fontSizH2,
    }}>
        <HomeWE newWedding={newWedding} setNewWedding={setNewWedding} handleChanges={handleChanges}  />
        <CountdownWE newWedding={newWedding} setNewWedding={setNewWedding}  />
        <UbicacionWE newWedding={newWedding} setNewWedding={setNewWedding} handleChanges={handleChanges}  />
        <FormWE  />

        <button 
        className="boton-diseno" 
        onClick={() => setPanelAbierto(true)}
      >
        <i class="fa-solid fa-palette"></i>  Diseño
      </button>
        <PanelDisenoWE abierto={panelAbierto} onClose={() => setPanelAbierto(false)} newWedding={newWedding} setNewWedding={setNewWedding} saveNewWedding={saveNewWedding} />
    </div>
}