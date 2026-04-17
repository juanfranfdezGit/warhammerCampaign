import "./armieRules.css";
import mechanicusData from "../../../../../../datas/armies/mechanicusFaction.json";
import fistsData from "../../../../../../datas/armies/fistsFaction.json";
import tyranidsData from "../../../../../../datas/armies/tyranidsFaction.json";
import sororitasData from "../../../../../../datas/armies/sororitasFaction.json";

export default function ArmieRules() {
  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: mechanicusData,
    imperialFist: fistsData,
    tyranids: tyranidsData,
    sororitas: sororitasData
  };

  const data = factions[faction];

  const doctrinasData = data?.find((item) => item.doctrinas);

  return (
    <>
      {doctrinasData && (
        <div className="doctrinasSection">
          <h2>Reglas de ejército</h2>

          {doctrinasData.doctrinas.map((doctrina) => (
            <div key={doctrina.id}>
              <h3>{doctrina.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: doctrina.description1 }} />
              <p>{doctrina.description2}</p>
              <p>{doctrina.description3}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
