import "./unitList.css";
import { useState } from "react";

import mechanicus from "../../../../../../datas/armies/mechanicusUnits.json";
import imperialFist from "../../../../../../datas/armies/fistsUnits.json";

export default function UnitList() {
  const faction = window.location.pathname.split("/").pop();
  const [listActive, setListActive] = useState(false);

  const toggleList = () => {
    setListActive(!listActive);
  };

  const factionLogos = {
    mechanicus: "/assets/icos/mechanicus.png",
    imperialFist: "/assets/icos/fistStra03.png",
  };

  const armies = {
    mechanicus,
    imperialFist,
  };

  const units = armies[faction] || [];
  const logo = factionLogos[faction];

  return (
    <div className="unitLinks">
      <img
        src={logo}
        alt={`${faction} banner`}
        className="factionBanner"
        onClick={toggleList}
      ></img>

      <div className={`unitsList ${listActive ? "active" : ""}`}>
        <ul>
          {units.map((unit) => (
            <li key={unit.id}>
              <a href={`#${unit.id}`} className="unitLink">
                {unit.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
