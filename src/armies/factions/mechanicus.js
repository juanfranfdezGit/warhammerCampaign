import mecha from "../../datas/armies/mechanicusUnits.json";
import destacamentos from "../../datas/armies/mechanicusFaction.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../armies.css";

export default function Mechanicus() {
  const doctrinasData = destacamentos.find((item) => item.doctrinas);
  const destacamentoData = destacamentos.find((item) => item.destacamentos);
  const estratagemaData = destacamentos.find((item) => item.estratagemas);
  const [listActive, setListActive] = useState(null);

  const toggleList = () => {
    setListActive(!listActive);
  };

  return (
    <section className="armiesSection">
      <div className="navTopBar">
        <Link to="/armies">
          <div className="backArmieBtn armiePage">
            <img src="/assets/icos/back.png" alt="back btn"></img>
          </div>
        </Link>

        <div className="unitLinks">
          <img
            src="/assets/icos/mechanicus.png"
            alt="mechanicus banner"
            className="factionBanner"
            onClick={toggleList}
          ></img>

          <div className={`unitsList ${listActive ? "active" : ""}`}>
            <ul>
              {mecha.map((unit) => (
                <li key={unit.id}>
                  <a href={`#${unit.id}`} className="unitLink">
                    {unit.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link to="/help">
          <div className="helpArmieBtn">
            <img src="/assets/icos/help.png" alt="help btn"></img>
          </div>
        </Link>
      </div>

      <div className="armiesHeader">
        <h1>{mecha[0].faction}</h1>
      </div>

      {doctrinasData && (
        <div className="doctrinasSection">
          <h2>Reglas de ejército</h2>

          {doctrinasData.doctrinas.map((doctrina) => (
            <div key={doctrina.id}>
              <h3>{doctrina.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: doctrina.description1 }} />
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
              <div className="mejoraSection">
                <h3>Mejoras</h3>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle1,
                  }}
                />
                <p>{destacamento.mejoradescription1}</p>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle2,
                  }}
                />
                <p>{destacamento.mejoradescription2}</p>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle3,
                  }}
                />
                <p>{destacamento.mejoradescription3}</p>
                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle4,
                  }}
                />
                <p>{destacamento.mejoradescription4}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {estratagemaData && (
        <div className="doctrinasSection estratagemasSection">
          <h2>Estratagemas</h2>

          {estratagemaData.estratagemas.map((estratagema) => (
            <div
              key={estratagema.id}
              className={`estratagemaGrid estratagema-${estratagema.id}`}
            >
              <div className="estratagemaSide">
                <div className="estratagemaImgContainer">
                  <img
                    src={estratagema.ico}
                    alt={estratagema.name}
                    className="estratagemaImg"
                  />
                </div>
                <div className="estratagemaValueContainer">
                  <p className="estratagemaValue">{estratagema.value}</p>
                </div>
              </div>
              <div className="estragemaInfo">
                <h3>{estratagema.name}</h3>
                <p>{estratagema.description1}</p>
                <p>{estratagema.when}</p>
                <p>{estratagema.target}</p>
                <p>{estratagema.effect}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {mecha.map((army) => (
        <table key={army.id} id={army.id} className="datasheetTable">
          <thead>
            {/* Nombre + Facción */}
            <tr className="unitHeader">
              <th colSpan="6">
                <h3>{army.name}</h3>
              </th>
            </tr>

            {/* Stats */}
            <tr className="statsHeader">
              <th>M.</th>
              <th>R.</th>
              <th>S.</th>
              <th>H.</th>
              <th>L.</th>
              <th>C.</th>
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

            {/* Armas */}
            {army.rangedWeapons?.length > 0 && (
              <>
                <tr className="sectionTitle">
                  <td colSpan="6">Armas a Distancia</td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ul className="weaponsList">
                      {army.rangedWeapons.map((weapon, index) => (
                        <li key={index} className="weaponItem flex column">
                          <table className="weaponsTable">
                            {/* 🔥 Nombre ocupando todo */}
                            <thead>
                              <tr className="weaponNameRow">
                                <th colSpan="8">{weapon.name}</th>
                              </tr>

                              {/* Cabecera */}
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

                            {/* Stats */}
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
            )}

            {army.meleeWeapons?.length > 0 && (
              <>
                <tr className="sectionTitle">
                  <td colSpan="6">Armas Cuerpo a Cuerpo</td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <ul className="weaponsList">
                      {army.meleeWeapons.map((weapon, index) => (
                        <li key={index} className="weaponItem flex column">
                          <table className="weaponsTable">
                            {/* 🔥 Nombre ocupando todo */}
                            <thead>
                              <tr className="weaponNameRow">
                                <th colSpan="8">{weapon.name}</th>
                              </tr>

                              {/* Cabecera */}
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

                            {/* Stats */}
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
            )}

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
                        <li className="unitHab" key={ability.id}>
                          <h3>{ability.name}:</h3>
                          <p>{ability.description}</p>
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
