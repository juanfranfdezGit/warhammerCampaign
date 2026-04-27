import mechaUnits from "../../datas/armies/mechanicusUnits.json";
import fistsUnits from "../../datas/armies/fistsUnits.json";
import sororitaUnits from "../../datas/armies/sororitas.json";

const unitMap = {
  mechanicus: mechaUnits,
  fists: fistsUnits,
  sororitas: sororitaUnits,
};

export default function UnitsSelector({ selectedUnits, onChange, factions }) {
  const availableUnits = (factions || []).flatMap((f) => {
    if (!f?.key) return []; 
    return unitMap[f.key] || [];
  });

  const selectedIds = selectedUnits || [];

  const toggleUnit = (id) => {
    const updated = selectedIds.includes(id)
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];

    onChange(updated);
  };

  return (
    <div className="gameStep select">
      <label className="gameStep-title">Selecciona Unidades</label>

      <div className="faction-multiselect">
        {availableUnits.map((unit) => {
          const isSelected = selectedIds.includes(unit.id);

          return (
            <label key={unit.id} className="faction-option">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleUnit(unit.id)}
              />

              <span className="checkmark" />

              <div className="faction-text">{unit.name}</div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
