import { Link } from "react-router-dom"

export default function CampaignList () {
    return (
        <section>
            <ul>
                <li><Link to="/campaigns/latido"><h2>El Latido de la Máquina Diosa</h2></Link></li>
            </ul>
        </ section>
    )
}