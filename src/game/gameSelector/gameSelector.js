import gameTypesData from "../../datas/games/gamesTypes.json";

export default function GameSelector({ selectedTypes, onChange, onNextStep }) {
  const selectedIds = selectedTypes || [];

  const toggleType = (id) => {
    const isSelected = selectedIds.includes(id);

    const updated = isSelected
      ? selectedIds.filter((x) => x !== id)
      : [...selectedIds, id];

    onChange(updated);
  };

  return (
    <div className="gameStep select">
      <label className="gameStep-title">Selecciona Partida</label>

      <div className="faction-multiselect">
        {gameTypesData.map((type) => {
          const isSelected = selectedIds.includes(type.id);

          return (
            <label key={type.id} className="faction-option">
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleType(type.id)}
              />

              <span className="checkmark" />

              <div className="faction-text">
                {type.name} ({type.points} pts)
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
