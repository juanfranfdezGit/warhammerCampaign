import "./habilities.css";

export default function Habilities({ habilities }) {
  return (
    <>
      <tr className="sectionTitle hability">
        <td colSpan="6"><img src="/assets/icos/hability.png" alt="hability"/>Habilidades</td>
      </tr>
      <tr>
        <td colSpan="6">
          <ul className="abilitiesList">
            {habilities.map((hability) => (
              <li className="unitHab" key={hability.id}>
                <h3>{hability.name}:</h3>
                <p>{hability.description}</p>
              </li>
            ))}
          </ul>
        </td>
      </tr>
    </>
  );
}
