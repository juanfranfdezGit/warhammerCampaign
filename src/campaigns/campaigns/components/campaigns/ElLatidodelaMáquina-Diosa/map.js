import "./map.css";
import { useState } from "react";

export default function LatidoMap() {
  const [actualState, setActualState] = useState(1);

  const maps = {
    1: "/assets/maps/latido01.png",
    2: "/assets/maps/latido02.png",
    3: "/assets/maps/latido03.png",
  };

  return (
    <section className="mapSection flex column">
      <nav className="actsLinks">
        <ul className="flex">
          <li
            className={actualState === 1 ? "active" : ""}
            onClick={() => setActualState(1)}
          >
            Acto I
          </li>
          <li
            className={actualState === 2 ? "active" : ""}
            onClick={() => setActualState(2)}
          >
            Acto II
          </li>
          <li
            className={actualState === 3 ? "active" : ""}
            onClick={() => setActualState(3)}
          >
            Acto III
          </li>
        </ul>
      </nav>
      <img
        src={maps[actualState]}
        alt="Mapa del Mundo Fronterizo Helion-Σ"
        className="mapImage"
      />
    </section>
  );
}
