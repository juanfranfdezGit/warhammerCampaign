import Habilidades from "../datas/help/habilities.json";
import Fases from "../datas/help/gamePhases.json";
import "./help.css";
import { Link } from "react-router-dom";

export default function Help() {
  return (
    <section className="helpSection">
      <Link to="/armies">
        <div className="backArmieBtn">
          <img src="/assets/icos/back.png" alt="back btn"></img>
        </div>
      </Link>

      <h1>Ayudas</h1>

       <ul>
        <h2>Fases del Juego</h2>
        {Fases.map((fase) => (
          <li key={fase.id}>
            <h3>{fase.name}</h3>
            <p>{fase.description}</p>
            <p className="ejs">{fase.description2}</p>
          </li>
        ))}
      </ul>

      <ul>
        <h2>Habilidades</h2>
        {Habilidades.map((habilidad) => (
          <li key={habilidad.id}>
            <h3>{habilidad.name}</h3>
            <p>{habilidad.description}</p>
            <p className="ejs">{habilidad.ejemplo}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
