import "../../CSS/usuario.css"
import { HeaderUser } from "./dashboardComponent/HeaderUser"
import { Section1DB } from "./dashboardComponent/Section1DB"
import { Section2DB } from "./dashboardComponent/Section2DB"

export function Dashboard({weddings, setWeddings}) {


    return <div>
        <HeaderUser />
        <Section1DB weddings={weddings} setWeddings={setWeddings} />
        <Section2DB/>
    </div>
}