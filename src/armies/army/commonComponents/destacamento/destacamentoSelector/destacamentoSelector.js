import "./destacamentoSelector.css"

export default function DestacamentoSelector({
  destacamentos,
  selected,
  onSelect,
}) {
  return (
    <div className="destacamentoSelector">
      {destacamentos.map((d) => (
        <button
          key={d.id}
          onClick={() => onSelect(d)}
          className={selected?.id === d.id ? "active" : ""}
        >
          {d.name}
        </button>
      ))}
    </div>
  );
}
