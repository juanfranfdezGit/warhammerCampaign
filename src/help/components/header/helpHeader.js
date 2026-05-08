import { Link } from "react-router-dom";
import "./helpHeader.css";
import ToTopBtn from "./toTopBtn";

export default function HelpHeader() {
  return (
    <section className="helpHeader">
      <section className="helpNav">
        <Link to="/">
          <div className="homeBtn">
            <img src="/assets/icos/back.png" alt="back btn"></img>
          </div>
        </Link>

        <Link to="/armies">
          <div className="armyBtn">
            <img src="/assets/icos/armyIco.png" alt="units ico"></img>
          </div>
        </Link>

        <Link to="/games">
          <div className="armyBtn">
            <img src="/assets/icos/gamesIco.png" alt="units ico"></img>
          </div>
        </Link>
      </section>

      <section className="helpLinks">
        <a href="#phases">Fases de Juego</a>
        <a href="#habilities">Habilidades</a>
      </section>

      <ToTopBtn />
    </section>
  );
}
