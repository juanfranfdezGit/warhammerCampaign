import "./factionSelector.css";
import factionsData from "../../datas/games/gamesFactions.json";

export default function FactionSelector({ selectedFactions, onChange }) {
  const selected = selectedFactions || [];

  const toggleFaction = (faction) => {
    const isSelected = selected.some((x) => x.id === faction.id);

    const updated = isSelected
      ? selected.filter((x) => x.id !== faction.id)
      : [
          ...selected,
          {
            id: faction.id,
            key: faction.key,
            name: faction.name,
          },
        ];

    onChange(updated);
  };

  return (
    <div className="gameStep select">
      <label className="gameStep-title">Selecciona Ejercito</label>

      <div className="faction-multiselect">
        {factionsData.map((faction) => {
          const isSelected = selected.some((x) => x.id === faction.id);

          return (
            <label key={faction.id} className="faction-option">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleFaction(faction)}
              />

              <span className="checkmark" />

              <div className="faction-text">{faction.name}</div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
