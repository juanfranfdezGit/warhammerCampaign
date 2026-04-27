import { useState } from "react";
import "./game.css";

import FactionSelector from "./factionSelector/factionSelector";
import GameSelector from "./gameSelector/gameSelector";
import UnitsSelector from "./unitSelector/unitSelector";

export default function Game() {
  const steps = ["faction", "type", "units", "summary"];

  const [stepIndex, setStepIndex] = useState(0);

  const [config, setConfig] = useState({
    type: [],
    faction: [],
    units: [],
    points: 1000,
  });

  const currentStep = steps[stepIndex];

  const nextStep = () => {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case "faction":
        return config.faction.length === 0;

      case "type":
        return config.type.length === 0;

      case "units":
        return config.units.length === 0;

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
            onChange={(units) => setConfig((prev) => ({ ...prev, units }))}
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
