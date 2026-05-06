import "../armies.css";
import Header from "./commonComponents/header/header";
import Rules from "./commonComponents/rules/rules";
import Destacamento from "./commonComponents/destacamento/destacamento";
import Units from "./commonComponents/units/units";
import Support from "./commonComponents/support/support";

export default function Army() {
  return (
    <section className="armiesSection">
      <Header />

      <Rules />

      <Destacamento />

      <Units />

      <Support />
    </section>
  );
}
