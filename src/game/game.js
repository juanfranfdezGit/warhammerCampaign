import { useState } from "react";
import "./game.css";
import FactionSelector from "./factionSelector/factionSelector";

export default function Game() {
  const [step, setStep] = useState(1);
  const [selectedFactions, setSelectedFactions] = useState([]);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <section className="gameSetup">
      {step === 1 && (
        <FactionSelector
          selectedFactions={selectedFactions}
          onChange={setSelectedFactions}
          onNextStep={nextStep}
        />
      )}

      {step === 2 && (
        <div>
          <h2>Paso 2</h2>
          <p>Aquí empieza la siguiente fase del juego</p>
        </div>
      )}
    </section>
  );
}
