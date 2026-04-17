import "./unitHeader.css";

export default function UnitHeader({ name, keywords }) {
  return (
    <tr className="unitHeader">
      <th colSpan="6">
        <h3>{name}</h3>
        <ul>
          {keywords?.map((keyword, index) => (
            <li key={index}>{keyword}</li>
          ))}
        </ul>
      </th>
    </tr>
  );
}
