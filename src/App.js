import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ArmiesList from "./armies/armiesList";
import Help from "./help/help";
import Army from "./armies/army/army";
import CampaignList from "./campaigns/campaignList";
import CampaignLore from "./campaigns/campaigns/components/lore/campaignLore";
import CampaignMap from "./campaigns/campaigns/components/map/campaignMap";
import Campaign from "./campaigns/campaigns/components/campaigns/campaign"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/help" element={<Help />} />

        <Route path="/campaigns" element={<CampaignList />} />
        <Route path="/campaigns/:campaign" element={<Campaign />} />
        <Route path="/campaigns/:campaign/lore" element={<CampaignLore />} />
        <Route path="/campaigns/:campaign/map" element={<CampaignMap />} />

        <Route path="/armies" element={<ArmiesList />} />
        <Route path="/armies/:army" element={<Army />} />
      </Routes>
    </>
  );
}

export default App;
