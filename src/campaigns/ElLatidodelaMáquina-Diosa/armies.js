import armiesData from "../../datas/armies/mechanicus.json";

export default function LatidoArmies() {
  return (
    <section className="armiesSection">
      <h2>Ejércitos</h2>

      <h3>{armiesData[0]?.faction}</h3>
      {armiesData.map((army) => (
        <table key={army.id} className="datasheetTable">
          <thead>
            {/* Nombre + Facción */}
            <tr className="unitHeader">
              <th colSpan="6">
                <p>{army.name}</p>
              </th>
            </tr>

            {/* Stats */}
            <tr className="statsHeader">
              <th>M</th>
              <th>T</th>
              <th>Sv</th>
              <th>W</th>
              <th>Ld</th>
              <th>OC</th>
            </tr>
          </thead>

          <tbody>
            <tr className="statsRow">
              <td>{army.movement}</td>
              <td>{army.resist}</td>
              <td>{army.salvation}</td>
              <td>{army.wound}</td>
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
                          <p>Rango: {weapon.range}</p>
                          <p>Utilizando: {weapon.number}</p>
                          <p>Fuerza: {weapon.strength}</p>
                          <p>Penetración: {weapon.ap}</p>
                          <p>Daño: {weapon.damage}</p>
                          <p>Disparos: {weapon.shots}</p>
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
