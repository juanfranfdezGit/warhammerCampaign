import Habilidades from "../datas/help/habilities.json";
import Fases from "../datas/help/gamePhases.json";
import "./help.css";
import HelpHeader from "./components/header/helpHeader";

export default function Help() {
  return (
    <section className="helpSection">
      <HelpHeader />

      <h1>Guía de Juego</h1>

      <ul>
        <h2>Fases del Juego</h2>
        {Fases.map((fase) => (
          <li key={fase.id} className="fase">
            <h3 className="phase">{fase.name}</h3>
            <p>{fase.description}</p>
            {fase.description2title && <h4>{fase.description2title}</h4>}
            <p>{fase.description2}</p>
            {fase.description3title && <h4>{fase.description3title}</h4>}
            <p>{fase.description3}</p>
            <br />
            <p>{fase.description4}</p>
            <br />
            <p>{fase.description5}</p>
            <br />
            <p>{fase.description6}</p>
            <br />
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
