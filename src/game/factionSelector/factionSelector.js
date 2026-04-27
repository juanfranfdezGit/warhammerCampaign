import "./factionSelector.css";
import factionsData from "../../datas/games/gamesFactions.json";

export default function FactionSelector({
  selectedFactions,
  onChange,
  onNextStep,
}) {
  const selectedIds = selectedFactions || [];

  const toggleFaction = (id) => {
    const isSelected = selectedIds.includes(id);

    const updated = isSelected
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];

    onChange(updated);
  };

  return (
    <div className="gameStep select">
      <label className="gameStep-title">Selecciona Ejercito</label>

      <div className="faction-multiselect">
        {factionsData.map((faction) => {
          const isSelected = selectedIds.includes(faction.id);

          return (
            <label key={faction.id} className="faction-option">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleFaction(faction.id)}
              />

              <span className="checkmark" />

              <div className="faction-text">{faction.name}</div>
            </label>
          );
        })}
      </div>

      <button
        onClick={onNextStep}
        disabled={selectedIds.length === 0}
        className="selectBtn"
      >
        Continuar
      </button>
    </div>
  );
}
