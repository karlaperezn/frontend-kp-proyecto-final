import "../../CSS/nuevaBoda.css"
import { HomeNB } from "./nuevaBoda/HomeNB"
import { CountdownNB } from "./nuevaBoda/CountdownNB"
import { UbicacionNB } from "./nuevaBoda/UbicacionNB"
import { FormNB } from "./nuevaBoda/FormNB" 


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


    return <>
        <HomeNB newWedding={newWedding} setNewWedding={setNewWedding} handleChanges={handleChanges} />
        <CountdownNB newWedding={newWedding} setNewWedding={setNewWedding} />
        <UbicacionNB newWedding={newWedding} setNewWedding={setNewWedding} handleChanges={handleChanges} />
        <FormNB />
    </>
}