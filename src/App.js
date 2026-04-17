import { Routes, Route } from "react-router-dom";
import Home from "./home";
import LatidoCampaign from "./campaigns/ElLatidodelaMáquina-Diosa";
import LatidoLore from "./campaigns/ElLatidodelaMáquina-Diosa/lore";
import LatidoMap from "./campaigns/ElLatidodelaMáquina-Diosa/map";
import ArmiesList from "./armies/armiesList";
import Help from "./armies/help";
import Army from "./armies/army/army";

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
        <Route path="/armies/:army" element={<Army />} />
      </Routes>
    </>
  );
}

export default App;
