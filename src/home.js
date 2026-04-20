import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex column">
      <img src="/assets/icos/logo.png" alt="Logo" className="logo" />
      <ul className="campaignsLinks">
        <li>
          <Link to="/campaigns">
            <div className="linkContainer flex column">
              <h2 className="campaignTitle">Lore Campañas</h2>
            </div>
          </Link>
          <Link to="/armies">
            <div className="linkContainer flex column">
              <h2 className="campaignTitle">Información de Ejercitos</h2>
            </div>
          </Link>
          <Link to="/help">
            <div className="linkContainer flex column">
              <h2 className="campaignTitle">Guía de Juego</h2>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
