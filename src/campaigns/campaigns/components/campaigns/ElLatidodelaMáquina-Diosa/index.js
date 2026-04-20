import { Link, Outlet } from "react-router-dom";
import "../campaignStyles.css";
import Navbar from "../nav";

export default function LatidoCampaign() {
  return (
    <>
      <Navbar />

      <section className="campaignSection flex column">
        <h1 className="campaignTitle">El Latido de la Maquina-Diosa</h1>

        <Outlet />

        <ul className="campaignActions flex">
          <Link to="/campaigns/latido/armies">
            <li>Ejércitos</li>
          </Link>
          <Link to="/campaigns/latido/history">
            <li>Historia</li>
          </Link>
          <Link to="/campaigns/latido/map">
            <li>Mapa</li>
          </Link>
          <Link to="/campaigns/latido/progress">
            <li>Progreso</li>
          </Link>
          <Link to="/campaigns/latido/results">
            <li>Finalizados</li>
          </Link>
        </ul>
      </section>
    </>
  );
}
