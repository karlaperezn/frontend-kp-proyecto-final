import "../../CSS/usuario.css"
import { HeaderUser } from "./dashboardComponent/HeaderUser"
import { Section1DB } from "./dashboardComponent/Section1DB"
import { Section2DB } from "./dashboardComponent/Section2DB"

export function Dashboard({weddings, setWeddings, selectedWedding, setSelectedWedding}) {


    return <div>
        <HeaderUser />
        <Section1DB weddings={weddings} setWeddings={setWeddings} selectedWedding={selectedWedding} setSelectedWedding={setSelectedWedding} />
        <Section2DB/>
    </div>
}