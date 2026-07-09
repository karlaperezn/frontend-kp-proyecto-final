import "../../CSS/usuario.css"
import { HeaderUser } from "./Dashboard/HeaderUser"
import { Section1_DB } from "./Dashboard/Section1_DB"
import { Section2_DB } from "./Dashboard/Section2_DB"

export function Dashboard() {


    return <div>
        <HeaderUser />
        <Section1_DB />
        <Section2_DB/>
    </div>
}