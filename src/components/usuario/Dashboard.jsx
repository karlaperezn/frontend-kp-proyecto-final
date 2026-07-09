import "../../CSS/usuario.css"
import { HeaderUser } from "./dashboardComponents/HeaderUser"
import { Section1DB } from "./dashboardComponents/Section1DB"
import { Section2DB } from "./dashboardComponents/Section2DB"

export function Dashboard() {


    return <div>
        <HeaderUser />
        <Section1DB />
        <Section2DB/>
    </div>
}