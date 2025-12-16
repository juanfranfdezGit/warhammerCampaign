import { Routes, Route } from "react-router-dom";
import Home from "./home";
import LatidoCampaign from "./campaigns/ElLatidodelaMáquina-Diosa";
import LatidoArmies from "./campaigns/ElLatidodelaMáquina-Diosa/armies";
import LatidoLore from "./campaigns/ElLatidodelaMáquina-Diosa/lore";
import LatidoMap from "./campaigns/ElLatidodelaMáquina-Diosa/map";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/campaigns/latido" element={<LatidoCampaign />}>
          <Route path="armies" element={<LatidoArmies />} />
          <Route path="history" element={<LatidoLore />} />
          <Route path="map" element={<LatidoMap />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
