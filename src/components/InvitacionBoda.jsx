import "../CSS/template.css"
import "../CSS/invite.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doGet } from "../services/api.services"
import { HeroIB } from './invitacionBoda/HeroIB'
import { CountdownIB } from './invitacionBoda/CountdownIB'
import { UbicacionIB } from './invitacionBoda/UbicacionIB'
import { FormIB } from './invitacionBoda/FormIB'

export function InvitacionBoda({ template }) {
    const [weddingInvite, setWeddingInvite] = useState(null)
    const { weddingSlug } = useParams();

    useEffect(() => {
        async function fetchInvite() {
            const res = await doGet(`weddings/show-invite/${weddingSlug}`);
            if (res.status) {
                setWeddingInvite(res.wedding)
            } else {
                console.error(res.message)
            }
        }
        fetchInvite()

    }, [weddingSlug])

    const exampleWedding = {
        brideName: "María",
        groomName: "Pedro",
        eventDate: "2027-07-14",
        ceremony: { place: "Basílica de San Miguel", address: "Calle de San Justo, 4, Madrid", hour: "17:30" },
        reception: { place: "Palacio del Negralejo", address: "Carretera de Mejorada, Km. 3, Madrid", hour: "19:15" },
        design: { tipography: ['Luxurious Script', 'Space Grotesk'], colors: ['#838969', '#414C3A'] }
    };

    const inviteValues = template ? exampleWedding : weddingInvite;

    if (!inviteValues || !inviteValues.design) {
        return <p>Cargando...</p>;
    }

    const [fontTitle, fontBody] = inviteValues.design.tipography || [];
    const [color1, color2] = inviteValues.design.colors || [];

    const fontSizH1 = (fontTitle === 'Luxurious Script') ? "128px" : (fontTitle === 'Cedarville Cursive') ? "96px" : "90px";
    const fontSizH2 = (fontTitle === 'Luxurious Script') ? "80px" : (fontTitle === 'Cedarville Cursive') ? "52px" : "36px";




    return <div id="wedding-web" style={{
        '--font-title-invite': `'${fontTitle}', serif`,
        '--font-body-invite': `'${fontBody}', sans-serif`,
        '--color-1-invite': color1,
        '--color-2-invite': color2,
        '--h1-fontSize-invite': fontSizH1,
        '--h2-fontSize-invite': fontSizH2,
        }} >
        <HeroIB inviteValues={inviteValues} />
        <CountdownIB inviteValues={inviteValues} />
        <UbicacionIB inviteValues={inviteValues} />
        <FormIB inviteValues={inviteValues} />
    </div>
}