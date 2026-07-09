import "../../CSS/usuario.css"
import { HeaderUser } from "./Dashboard/HeaderUser"
import { Section1DB } from "./Dashboard/Section1DB"
import { Section2DB } from "./Dashboard/Section2DB"

export function Dashboard() {


    return <div>
        <HeaderUser />
        <Section1DB />
        <Section2DB/>
    </div>
}