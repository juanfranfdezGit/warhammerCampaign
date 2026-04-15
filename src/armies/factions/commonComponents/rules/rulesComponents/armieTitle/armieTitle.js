import "./armieTitle.css";

export default function ArmieTitle() {
  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: {
      name: "Adeptus Mechanicus",
    },
    imperialFist: {
      name: "Imperial Fists",
    },
  };

  const title = factions[faction]?.name || "Desconocido";

  return (
    <>
      <div className="armiesTittle">
        <h1>{title}</h1>
      </div>
    </>
  );
}
