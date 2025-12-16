import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex column">
      <img src="/assets/icos/logo.png" alt="Logo" className="logo" />
      <ul className="campaignsLinks">
        <li><Link to="/campaigns/latido">El Latido de la Maquina-Diosa</Link></li>
      </ul>
    </div>
  );
}

export default Home;
