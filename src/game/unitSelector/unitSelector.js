import mechaUnits from "../../datas/armies/mechanicusUnits.json";
import fistsUnits from "../../datas/armies/fistsUnits.json";
import sororitaUnits from "../../datas/armies/sororitas.json";
import gameTypesData from "../../datas/games/gamesTypes.json";
import "./unitSelector.css";
import { useEffect } from "react";

const unitMap = {
  mechanicus: mechaUnits,
  fists: fistsUnits,
  sororitas: sororitaUnits,
};

export default function UnitsSelector({
  selectedUnits = [],
  selectedTypes = [],
  onChange,
  onOverLimit,
  factions = [],
}) {
  const selectedTypeId =
    Array.isArray(selectedTypes) && selectedTypes.length > 0
      ? Number(selectedTypes[0])
      : null;

  const selectedGameType = gameTypesData.find(
    (type) => Number(type.id) === selectedTypeId,
  );

  const pointsLimit = selectedGameType?.points ?? 0;

  const availableUnits = factions.flatMap((f) => {
    if (!f?.key) return [];
    return unitMap[f.key] || [];
  });

  const selectedUnitObjects = availableUnits.filter((unit) =>
    selectedUnits.includes(unit.id),
  );

  const currentPoints = selectedUnitObjects.reduce(
    (total, unit) => total + (unit.points || 0),
    0,
  );

  const remainingPoints = pointsLimit - currentPoints;

  const isOverLimit = currentPoints > pointsLimit;

  useEffect(() => {
    onOverLimit?.(isOverLimit);
  }, [isOverLimit, onOverLimit]);

  const toggleUnit = (id) => {
    const unit = availableUnits.find((u) => u.id === id);
    if (!unit) return;

    const isSelected = selectedUnits.includes(id);

    if (isSelected) {
      onChange(selectedUnits.filter((x) => x !== id));
      return;
    }

    const newTotal = currentPoints + (unit.points || 0);

    if (newTotal <= pointsLimit) {
      onChange([...selectedUnits, id]);
    } else {
      console.warn("⛔ Límite de puntos excedido");
    }
  };

  return (
    <div className="gameStep select unitSelect">
      <label className="gameStep-title">Selecciona Unidades</label>

      <div className="game-points-summary">
        <p>
          <strong>Puntos actuales:</strong> {currentPoints}
        </p>
        <p>
          <strong>Límite:</strong> {pointsLimit}
        </p>
        <p>
          <strong>Restantes:</strong> {remainingPoints}
        </p>
      </div>

      <div className="faction-multiselect">
        {availableUnits.map((unit) => {
          const isSelected = selectedUnits.includes(unit.id);
          const wouldExceedLimit =
            !isSelected && currentPoints + (unit.points || 0) > pointsLimit;

          return (
            <label key={unit.id} className="faction-option">
              <input
                type="checkbox"
                checked={isSelected}
                disabled={wouldExceedLimit}
                onChange={() => toggleUnit(unit.id)}
              />

              <span className="checkmark" />

              <div className="faction-text">
                <div>{unit.name}</div>
                {unit.points && (
                  <small className="unit-points">{unit.points} pts</small>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
