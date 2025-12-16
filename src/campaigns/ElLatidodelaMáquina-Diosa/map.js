import "./map.css";

export default function LatidoMap() {
  return (
    <section className="mapSection flex column">
        <nav className="actsLinks">
            <ul className="flex">
                <li>Acto I</li>
                <li>Acto II</li>
                <li>Acto III</li>
            </ul>
        </nav>
      <img
        src="/assets/maps/latido01.png"
        alt="Mapa del Mundo Fronterizo Helion-Σ"
        className="mapImage"
      />
    </section>
  );
}