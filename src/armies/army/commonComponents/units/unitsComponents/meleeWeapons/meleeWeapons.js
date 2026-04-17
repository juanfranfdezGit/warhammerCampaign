export default function MeleeWeapons({ meleeWeapons }) {
  return (
    <>
      <tr className="sectionTitle">
        <td colSpan="6">
          <img src="/assets/icos/battle.png" alt="melee ico" />
          Armas Cuerpo a Cuerpo
        </td>
      </tr>
      <tr>
        <td colSpan="6">
          <ul className="weaponsList">
            {meleeWeapons.map((weapon, index) => (
              <li key={index} className="weaponItem flex column">
                <table className="weaponsTable">
                  <thead>
                    <tr className="weaponNameRow">
                      <th colSpan="8">{weapon.name}</th>
                    </tr>

                    <tr className="statsWeapons">
                      <th>N.</th>
                      <th>R.</th>
                      <th>A.</th>
                      <th>I.</th>
                      <th>F.</th>
                      <th>P.</th>
                      <th>D.</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="statsWeapons">
                      <td>{weapon.number}</td>
                      <td>{weapon.range}"</td>
                      <td>{weapon.ataques}</td>
                      <td>{weapon.impacto}+</td>
                      <td>{weapon.fuerza}</td>
                      <td>{weapon.penetración}</td>
                      <td>{weapon.daño}</td>
                    </tr>

                    {weapon.abilities.length > 0 && (
                      <tr>
                        <td colSpan="8">
                          {weapon.abilities.map((ability, idx) => (
                            <span key={idx} className="weaponHab">
                              {ability}
                            </span>
                          ))}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
        </td>
      </tr>
    </>
  );
}
