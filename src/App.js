import { Routes, Route } from "react-router-dom";
import Home from "./home";
import LatidoCampaign from "./campaigns/ElLatidodelaMáquina-Diosa";
import LatidoLore from "./campaigns/ElLatidodelaMáquina-Diosa/lore";
import LatidoMap from "./campaigns/ElLatidodelaMáquina-Diosa/map";
import ArmiesList from "./armies/armiesList";
import Mechanicus from "./armies/factions/mechanicus";
import ImperialFists from "./armies/factions/imperialFists";
import Sororitas from "./armies/factions/sororitas";
import Tyran from "./armies/factions/tyranid";
import Help from "./armies/help";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/help" element={<Help />} />

        <Route path="/campaigns/latido" element={<LatidoCampaign />}>
          <Route path="history" element={<LatidoLore />} />
          <Route path="map" element={<LatidoMap />} />
        </Route>

        <Route path="/armies" element={<ArmiesList />} />
        <Route path="/armies/mechanicus" element={<Mechanicus />} />
        <Route path="/armies/imperialFist" element={<ImperialFists />} />
        <Route path="/armies/sororitas" element={<Sororitas />} />
        <Route path="/armies/tyranids" element={<Tyran />} />
      </Routes>
    </>
  );
}

export default App;
