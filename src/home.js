import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex column">
      <img src="/assets/icos/logo.png" alt="Logo" className="logo" />
      <ul className="campaignsLinks">
        <li>
          <Link to="/campaigns/latido">
            <div className="linkContainer flex column">
              <h2 className="campaignTitle">El Latido de la Maquina-Diosa</h2>
              <div className="flex">
                <img className="campaignFaction" alt="mechanicus logo" src="/assets/icos/mechanicus.png" />
                <img className="campaignFaction" alt="imperial fist logo" src="/assets/icos/imperialFist.png" />
                <img className="campaignFaction" alt="tyranid logo" src="/assets/icos/tyranid.png" />
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
