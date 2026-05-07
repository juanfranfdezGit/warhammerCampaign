import Habilidades from "../datas/help/habilities.json";
import Fases from "../datas/help/gamePhases.json";
import "./help.css";
import HelpHeader from "./components/header/helpHeader";

export default function Help() {
  return (
    <section className="helpSection">
      <HelpHeader />

      <h1>Guía de Juego</h1>

      <section className="gamePhases" id="phases">
        <h2>Fases de Juego</h2>
        {Fases.map((fase) => (
          <div key={fase.id} className="fase">
            <h3 className="phaseTitle">{fase.name}</h3>
            {fase.descriptions.map((description, index) => (
              <p className="phaseDescriptions" key={index}>
                {description}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section id="habilities" className="habilities">
        <h2>Habilidades</h2>
        <ul>
          {Habilidades.map((habilidad) => (
            <li key={habilidad.id} id={habilidad.key}>
              <h3>{habilidad.name}</h3>
              <p>{habilidad.description}</p>
              <p className="ejs">{habilidad.ejemplo}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
