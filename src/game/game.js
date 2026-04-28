import { useState } from "react";
import "./game.css";

import FactionSelector from "./factionSelector/factionSelector";
import GameSelector from "./gameSelector/gameSelector";
import UnitsSelector from "./unitSelector/unitSelector";

export default function Game() {
  const steps = ["faction", "type", "units", "summary"];
  const [overLimit, setOverLimit] = useState(false);

  const [stepIndex, setStepIndex] = useState(0);

  const [config, setConfig] = useState({
    type: null,
    faction: [],
    units: [],
  });

  const currentStep = steps[stepIndex];

  const nextStep = () => {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const isNextDisabled = () => {
    const faction = config.faction || [];
    const type = config.type || [];
    const units = config.units || [];

    switch (currentStep) {
      case "faction":
        return faction.length === 0;

      case "type":
        return type.length === 0;

      case "units":
        return units.length === 0 || overLimit;

      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case "faction":
        return (
          <FactionSelector
            selectedFactions={config.faction}
            onChange={(factions) =>
              setConfig((prev) => ({ ...prev, faction: factions }))
            }
            onNextStep={nextStep}
          />
        );

      case "type":
        return (
          <GameSelector
            selectedTypes={config.type}
            onChange={(types) =>
              setConfig((prev) => ({ ...prev, type: types }))
            }
            onNextStep={nextStep}
          />
        );

      case "units":
        return (
          <UnitsSelector
            factions={config.faction}
            selectedUnits={config.units}
            selectedTypes={config.type}
            onChange={(units) => setConfig((prev) => ({ ...prev, units }))}
            onOverLimit={setOverLimit}
          />
        );

      case "summary":
        return (
          <div>
            <h2>Resumen</h2>
            <pre>{JSON.stringify(config, null, 2)}</pre>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="gameSetup">
      <button
        onClick={prevStep}
        disabled={stepIndex === 0}
        className="setupBtnBack"
      >
        Atrás
      </button>

      <button
        onClick={nextStep}
        disabled={isNextDisabled()}
        className="setupBtnNext"
      >
        Continuar
      </button>

      {renderStep()}
    </section>
  );
}
