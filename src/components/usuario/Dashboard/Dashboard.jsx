import "../../../CSS/usuario.css"
import { HeaderUser } from "./HeaderUser"
import { Section1_DB } from "./Section1_DB"
import { Section2_DB } from "./Section2_DB"

export function Dashboard() {


    return <div>
        <HeaderUser />
        <Section1_DB />
        <Section2_DB/>
    </div>
}