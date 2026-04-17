import "./estratagemas.css";
import mechanicusData from "../../../../datas/armies/mechanicusFaction.json";
import fistsData from "../../../../datas/armies/fistsFaction.json";
import tyranidsData from "../../../../datas/armies/tyranidsFaction.json";
import sororitasData from "../../../../datas/armies/sororitasFaction.json";

export default function Estratagemas() {
  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: mechanicusData,
    imperialFist: fistsData,
    tyranids: tyranidsData,
    sororitas: sororitasData
  };

  const data = factions[faction];

  const estratagemaData = data?.find((item) => item.estratagemas);

  return (
    <section id="estratagemas">
      {estratagemaData && (
        <div className="doctrinasSection estratagemasSection">
          <h2>Estratagemas</h2>

          {estratagemaData.estratagemas.map((estratagema) => (
            <div
              key={estratagema.id}
              className={`estratagemaGrid estratagema-${estratagema.id}`}
            >
              <div className="estratagemaSide">
                <div className="estratagemaImgContainer">
                  <img
                    src={estratagema.ico}
                    alt={estratagema.name}
                    className="estratagemaImg"
                  />
                </div>
                <div className="estratagemaValueContainer">
                  <p className="estratagemaValue">{estratagema.value}</p>
                </div>
              </div>
              <div className="estragemaInfo">
                <h3>{estratagema.name}</h3>
                <p>{estratagema.description1}</p>
                <p>{estratagema.when}</p>
                <p>{estratagema.target}</p>
                <p>{estratagema.effect}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
