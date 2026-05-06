import "./destacamento.css";
import { useState } from "react";

import mechanicusData from "../../../../datas/armies/mechanicusFaction.json";
import fistsData from "../../../../datas/armies/fistsFaction.json";
import tyranidsData from "../../../../datas/armies/tyranidsFaction.json";
import sororitasData from "../../../../datas/armies/sororitasFaction.json";

import DestacamentoSelector from "./destacamentoSelector/destacamentoSelector";
import DestacamentoDetalle from "./destacamentoInfo/destacamentoInfo";
import Estratagemas from "./estratagema/estratagemas";

export default function Destacamento() {
  const [selectedDestacamento, setSelectedDestacamento] = useState(null);

  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: mechanicusData,
    imperialFist: fistsData,
    tyranids: tyranidsData,
    sororitas: sororitasData,
  };

  const data = factions[faction];
  const destacamentoData = data?.find((item) => item.destacamentos);

  return (
    <section id="destacamentos">
      {destacamentoData && (
        <div className="doctrinasSection destacamentosSection">
          <h2>Destacamentos</h2>

          <DestacamentoSelector
            destacamentos={destacamentoData.destacamentos}
            selected={selectedDestacamento}
            onSelect={setSelectedDestacamento}
          />

          <DestacamentoDetalle destacamento={selectedDestacamento} />

          {selectedDestacamento?.estratagemas && (
            <Estratagemas estratagemas={selectedDestacamento.estratagemas} />
          )}
        </div>
      )}
    </section>
  );
}
