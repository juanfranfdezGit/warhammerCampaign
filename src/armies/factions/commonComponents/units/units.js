import "./units.css";
import mechanicusData from "../../../../datas/armies/mechanicusUnits.json";
import fistsData from "../../../../datas/armies/fistsUnits.json";

import UnitHeader from "./unitsComponents/unitHeader/unitHeader";
import Stats from "./unitsComponents/stats/stats";
import RangeWeapons from "./unitsComponents/rangeWeapons/rangeWeapons";
import MeleeWeapons from "./unitsComponents/meleeWeapons/meleeWeapons";
import Habilities from "./unitsComponents/habilities/habilities";

export default function Units() {
  const faction = window.location.pathname.split("/").pop();

  const factions = {
    mechanicus: mechanicusData,
    imperialFist: fistsData,
  };

  const units = factions[faction] || [];

  return (
    <section id="unidades">
      {units.map((army) => (
        <table key={army.id} id={army.id} className="datasheetTable">
          <thead>
            <UnitHeader name={army.name} keywords={army.keywords} />
          </thead>

          <tbody>
            <Stats
              movimiento={army.movimiento}
              resistencia={army.resistencia}
              salvacion={army.salvacion}
              salvacionInv={army.salvacionInv}
              herida={army.herida}
              liderazgo={army.liderazgo}
              control={army.control}
            />

           <RangeWeapons rangedWeapons={army.rangedWeapons} />

           <MeleeWeapons meleeWeapons={army.meleeWeapons} />

            <Habilities habilities={army.abilities} />
          </tbody>
        </table>
      ))}
    </section>
  );
}
