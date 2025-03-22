import BoxComponent from "../Components/BoxComponent"
import FooterComponent from "../Components/Footer"
import HeaderComponent from "../Components/HeaderComponet"

export default function ServicePage()
{
    return(<div style={{cursor:"pointer"}}>
        <HeaderComponent/>
        Service Page.
        <BoxComponent/>
        <FooterComponent/>
    </div>)
}