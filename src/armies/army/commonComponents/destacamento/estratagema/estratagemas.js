import "./estratagemas.css";

export default function Estratagemas({ estratagemas }) {
  if (!estratagemas) return null;

  return (
    <section id="estratagemas">
      <div className="doctrinasSection estratagemasSection">
        <h2>Estratagemas</h2>

        {estratagemas.map((estratagema) => (
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
    </section>
  );
}