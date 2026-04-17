import "./stats.css";

export default function Stats({
  movimiento,
  resistencia,
  salvacion,
  salvacionInv,
  herida,
  liderazgo,
  control,
}) {
  return (
    <>
      <tr className="statsHeader">
        <th>M.</th>
        <th>R.</th>
        <th>S.</th>
        <th>H.</th>
        <th>L.</th>
        <th>C.</th>
      </tr>

      <tr className="statsRow">
        <td>{movimiento}</td>
        <td>{resistencia}</td>
        <td>
          {salvacion} <span className="inv">{salvacionInv}</span>
        </td>
        <td>{herida}</td>
        <td>{liderazgo}</td>
        <td>{control}</td>
      </tr>
    </>
  );
}
