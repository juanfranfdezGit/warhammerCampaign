import "./destacamento.css";
import mechanicusData from "../../../../datas/armies/mechanicusFaction.json";
import fistsData from "../../../../datas/armies/fistsFaction.json";

export default function Destacamento() {
  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: mechanicusData,
    imperialFist: fistsData,
  };

  const data = factions[faction];

  const destacamentoData = data?.find((item) => item.destacamentos);
  
  return (
    <section id="destacamentos">
      {destacamentoData && (
        <div className="doctrinasSection destacamentosSection">
          <h2>Destacamentos</h2>

          {destacamentoData.destacamentos.map((destacamento) => (
            <div key={destacamento.id}>
              <h3>{destacamento.name}</h3>
              <p>{destacamento.description1}</p>
              <p>{destacamento.description2}</p>
              <p>{destacamento.description3}</p>
              <p>{destacamento.description4}</p>

              <div className="mejoraSection">
                <h3>Mejoras</h3>

                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle1,
                  }}
                />
                <p>{destacamento.mejoradescription1}</p>

                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle2,
                  }}
                />
                <p>{destacamento.mejoradescription2}</p>

                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle3,
                  }}
                />
                <p>{destacamento.mejoradescription3}</p>

                <h4
                  dangerouslySetInnerHTML={{
                    __html: destacamento.mejoratitle4,
                  }}
                />
                <p>{destacamento.mejoradescription4}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
