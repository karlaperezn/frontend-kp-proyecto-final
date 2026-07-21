import "../CSS/template.css"
import { HeroIB } from './invitacionBoda/HeroIB'
import { CountdownIB } from './invitacionBoda/CountdownIB'
import { UbicacionIB } from './invitacionBoda/UbicacionIB'
import { FormIB } from './invitacionBoda/FormIB'

export function InvitacionBoda({ template, weddingInvite }) {

    

    return <div id="invitacion-boda">
        <HeroIB />
        <CountdownIB />
        <UbicacionIB />
        <FormIB />
    </div>
}