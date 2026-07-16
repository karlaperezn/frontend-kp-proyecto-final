import "../../CSS/nuevaBoda.css"
import { HomeNB } from "./nuevaBoda/HomeNB"
import { CountdownNB } from "./nuevaBoda/CountdownNB"
import { UbicacionNB } from "./nuevaBoda/UbicacionNB"
import { FormNB } from "./nuevaBoda/FormNB" 
import { PanelDisenoNB } from "./nuevaBoda/PanelDisenoNB"


export function NuevaBoda({ newWedding, setNewWedding }) {

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

    const [fontTitle, fontBody] = newWedding.design.tipography || [];
    const [color1, color2] = newWedding.design.colors || [];



    return <div style={{
        '--font-title-wedding': `'${fontTitle}', serif`,
        '--font-body-wedding': `'${fontBody}', sans-serif`,
        '--color-1-wedding': color1,
        '--color-2-wedding': color2
    }}>
        <HomeNB newWedding={newWedding} setNewWedding={setNewWedding} handleChanges={handleChanges}  />
        <CountdownNB newWedding={newWedding} setNewWedding={setNewWedding}  />
        <UbicacionNB newWedding={newWedding} setNewWedding={setNewWedding} handleChanges={handleChanges}  />
        <FormNB  />
        <PanelDisenoNB newWedding={newWedding} setNewWedding={setNewWedding}  />
    </div>
}