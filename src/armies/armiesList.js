import { Link } from "react-router-dom";
import "./armies.css";

export default function ArmiesList() {
  return (
    <>
      <div className="armiesList">
        <Link to="/">
          <div className="backArmieBtn shadow">
            <img src="/assets/icos/back.png" alt="back btn" />
          </div>
        </Link>

        <ul>
          <Link to="/armies/imperialFist">
            <div className="linkContainer flex column armiesListDiv imperialFist"></div>
          </Link>
          <Link to="/armies/mechanicus">
            <div className="linkContainer flex column armiesListDiv mechanicus"></div>
          </Link>
          <Link to="/armies/sororitas">
            <div className="linkContainer flex column armiesListDiv sororitas"></div>
          </Link>
          <Link to="/armies/tyranids">
            <div className="linkContainer flex column armiesListDiv tyranids"></div>
          </Link>
        </ul>
      </div>
    </>
  );
}
