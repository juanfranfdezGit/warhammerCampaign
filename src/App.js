import { Routes, Route } from "react-router-dom";
import Home from "./home";
import LatidoCampaign from "./campaigns/ElLatidodelaMáquina-Diosa";
import LatidoLore from "./campaigns/ElLatidodelaMáquina-Diosa/lore";
import LatidoMap from "./campaigns/ElLatidodelaMáquina-Diosa/map";
import ArmiesList from "./armies/armiesList";
import Mechanicus from "./armies/factions/mechanicus";
import Marines from "./armies/factions/marines";
import Sororitas from "./armies/factions/sororitas";
import Tyran from "./armies/factions/tyranid";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/campaigns/latido" element={<LatidoCampaign />}>
          <Route path="history" element={<LatidoLore />} />
          <Route path="map" element={<LatidoMap />} />
        </Route>

        <Route path="/armies" element={<ArmiesList />} />
        <Route path="/armies/mechanicus" element={<Mechanicus />} />
        <Route path="/armies/marines" element={<Marines />} />
        <Route path="/armies/sororitas" element={<Sororitas />} />
        <Route path="/armies/tyranids" element={<Tyran />} />
      </Routes>
    </>
  );
}

export default App;
