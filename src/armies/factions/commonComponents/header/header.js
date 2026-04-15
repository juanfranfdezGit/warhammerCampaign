import BackButton from "./headerComponents/backButton/backButton";
import SectionList from "./headerComponents/sectionList/sectionList";
import UnitList from "./headerComponents/unitList/unitList";
import HelpButton from "./headerComponents/helpButton/helpButton";
import "./header.css";

export default function Header() {
  return (
    <div className="navTopBar">
      <BackButton />

      <UnitList />

      <SectionList />

      <HelpButton />
    </div>
  );
}
