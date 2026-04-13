import { Link } from "react-router-dom";
import "./armies.css";

export default function ArmiesList() {
  return (
    <>
      <div className="armiesList">
        <Link to="/">
          <div className="backArmieBtn">
            <img src="/assets/icos/back.png" alt="back btn"></img>
          </div>
        </Link>

        <ul>
          <Link to="marines">
            <div className="linkContainer flex column armiesListDiv">
              <div className="flex">
                <img
                  className="campaignFaction armiesListDiv"
                  alt="mechanicus logo"
                  src="/assets/icos/imperialFist.png"
                />
                <h3>Puños Imperiales</h3>
              </div>
            </div>
          </Link>
          <Link to="mechanicus">
            <div className="linkContainer flex column armiesListDiv">
              <div className="flex">
                <img
                  className="campaignFaction armiesListDiv"
                  alt="mechanicus logo"
                  src="/assets/icos/mechanicus.png"
                />
                <h3>Adeptus Mechanicus</h3>
              </div>
            </div>
          </Link>
          <Link to="sororitas">
            <div className="linkContainer flex column armiesListDiv">
              <div className="flex">
                <img
                  className="campaignFaction armiesListDiv"
                  alt="mechanicus logo"
                  src="/assets/icos/sororitas.png"
                />
                <h3>Adepta Sororitas</h3>
              </div>
            </div>
          </Link>
          <Link to="tyranids">
            <div className="linkContainer flex column armiesListDiv">
              <div className="flex">
                <img
                  className="campaignFaction armiesListDiv"
                  alt="mechanicus logo"
                  src="/assets/icos/tyranid.png"
                />
                <h3>Tyranidos</h3>
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
}
