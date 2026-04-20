import { Link } from "react-router-dom";
import "./helpHeader.css";

export default function HelpHeader() {
  return (
    <section className="helpHeader">
      <Link to="/">
        <div className="homeBtn">
          <img src="/assets/icos/back.png" alt="back btn"></img>
        </div>
      </Link>
      
      <Link to="/armies">
        <div className="armyBtn">
          <img src="/assets/icos/fistStra06.png" alt="units ico"></img>
        </div>
      </Link>
    </section>
  );
}
