import "./support.css";
import { useState } from "react";

export default function Support() {
  const [open, setOpen] = useState(false);

  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: {
      name: "Adeptus Mechanicus",
      supports: [
        {
          name: "Adepta Sororitas",
          link: "/armies/sororitas",
          img: "/assets/icos/sororitas.png",
        },
        {
          name: "Puños Imperiales",
          link: "/armies/imperialFist",
          img: "/assets/icos/imperialFist.png",
        },
      ],
    },
    imperialFist: {
      name: "Puños Imperiales",
      supports: [
        {
          name: "Adepta Sororitas",
          link: "/armies/sororitas",
          img: "/assets/icos/sororitas.png",
        },
        {
          name: "Adeptus Mechanicus",
          link: "/armies/mechanicus",
          img: "/assets/icos/mechanicus.png",
        },
      ],
    },
    sororitas: {
      name: "Adeptus Sororitas",
      supports: [
        {
          name: "Adeptus Mechanicus",
          link: "/armies/mechanicus",
          img: "/assets/icos/mechanicus.png",
        },
        {
          name: "Puños Imperiales",
          link: "/armies/imperialFist",
          img: "/assets/icos/imperialFist.png",
        },
      ],
    },
    tyranids: {
      name: "Colmena Tiránida",
      supports: [],
    },
  };

  const currentFaction = factions[faction];
  const supports = currentFaction?.supports || [];

  if (supports.length === 0) return null;

  return (
    <section className="supportContainer">
      <div className="supportBtn">
        <img
          src="/assets/icos/support.png"
          alt="support ico"
          onClick={() => setOpen(!open)}
          className={open ? "active" : ""}
        />
      </div>

      <div className={`supportList ${open ? "active" : ""}`}>
        {supports.map((support, index) => (
          <a key={index} href={support.link} className="supportItem">
            <img src={support.img} alt={support.name} />
            <p>{support.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
