import mecha from "../../datas/armies/mechanicusUnits.json";
import destacamentos from "../../datas/armies/mechanicusFaction.json";
import { Link } from "react-router-dom";
import "../armies.css";

export default function Mechanicus() {
  const doctrinasData = destacamentos.find((item) => item.doctrinas);
  const destacamentoData = destacamentos.find((item) => item.destacamentos);

  return (
    <section className="armiesSection">
      <Link to="/armies">
        <div className="backArmieBtn">
          <img src="/assets/icos/back.png" alt="back btn"></img>
        </div>
      </Link>

      <div className="armiesHeader">
        <h1>{mecha[0].faction}</h1>
      </div>

      {doctrinasData && (
        <div className="doctrinasSection">
          <h2>Reglas de ejército</h2>

          {doctrinasData.doctrinas.map((doctrina) => (
            <div key={doctrina.id}>
              <h3>{doctrina.name}</h3>
              <p>{doctrina.description1}</p>
              <p>{doctrina.description2}</p>
              <p>{doctrina.description3}</p>
            </div>
          ))}
        </div>
      )}

      {destacamentoData && (
        <div className="doctrinasSection destacamentosSection">
          <h2>Destacamentos</h2>

          {destacamentoData.destacamentos.map((destacamento) => (
            <div key={destacamento.id}>
              <h3>{destacamento.name}</h3>
              <p>{destacamento.description1}</p>
              <p>{destacamento.description2}</p>
              <p>{destacamento.description3}</p>
              <p>{destacamento.description4}</p>
            </div>
          ))}
        </div>
      )}

      {mecha.map((army) => (
        <table key={army.id} className="datasheetTable">
          <thead>
            {/* Nombre + Facción */}
            <tr className="unitHeader">
              <th colSpan="6">
                <img
                  src={army.image}
                  alt={army.name}
                  className="datasheetImg"
                ></img>
                <p>{army.name}</p>
              </th>
            </tr>

            {/* Stats */}
            <tr className="statsHeader">
              <th>Mov.</th>
              <th>Res.</th>
              <th>Salv.</th>
              <th>Her.</th>
              <th>Lid.</th>
              <th>Cont.</th>
            </tr>
          </thead>

          <tbody>
            <tr className="statsRow">
              <td>{army.movimiento}</td>
              <td>{army.resistencia}</td>
              <td>
                {army.salvacion}{" "}
                <span className="inv">{army["salvacion invulnerable"]}</span>
              </td>
              <td>{army.herida}</td>
              <td>{army.leadership}</td>
              <td>{army.control}</td>
            </tr>

            {/* Habilidades */}
            {army.abilities?.length > 0 && (
              <>
                <tr className="sectionTitle">
                  <td colSpan="6">Habilidades</td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ul className="abilitiesList">
                      {army.abilities.map((ability) => (
                        <li key={ability.id}>
                          <strong>{ability.name}:</strong> {ability.description}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </>
            )}

            {/* Armas */}
            {army.weapons?.length > 0 && (
              <>
                <tr className="sectionTitle">
                  <td colSpan="6">Armas</td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ul className="weaponsList">
                      {army.weapons.map((weapon, index) => (
                        <li key={index} className="weaponItem flex column">
                          <h4>{weapon.name}:</h4>
                          <p>Utilizando: {weapon.number}</p>
                          <p>Alcance: {weapon.range}</p>
                          <p>Ataques: {weapon.ataques}</p>
                          <p>Impacto: {weapon.impacto}</p>
                          <p>Fuerza: {weapon.fuerza}</p>
                          <p>Penetración: {weapon.penetración}</p>
                          <p>Daño: {weapon.daño}</p>
                          <p>{weapon.abilities}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      ))}
    </section>
  );
}
