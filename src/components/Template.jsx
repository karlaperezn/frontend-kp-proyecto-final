import { HeroTemplate } from "./template/HeroTemplate"
import { Section1_Countdown } from "./template/Section1Countdown"
import { Section2Location } from "./template/Section2Location"
import "../CSS/template.css"

export function Template(){

    return <>
    <HeroTemplate/>
    <Section1Countdown/>
    </>
}