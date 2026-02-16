import { Link, Outlet } from "react-router-dom";

export default function ArmiesList() {
  return (
    <>
      <ul>
        <Link to="marines">
          <div className="linkContainer flex column">
            <div className="flex">
              <img
                className="campaignFaction"
                alt="mechanicus logo"
                src="/assets/icos/imperialFist.png"
              />
              <h3>Space Marines</h3>
            </div>
          </div>
        </Link>
        <Link to="mechanicus">
          <div className="linkContainer flex column">
            <div className="flex">
              <img
                className="campaignFaction"
                alt="mechanicus logo"
                src="/assets/icos/mechanicus.png"
              />
              <h3>Adeptus Mechanicus</h3>
            </div>
          </div>
        </Link>
        <Link to="sororitas">
          <div className="linkContainer flex column">
            <div className="flex">
              <img
                className="campaignFaction"
                alt="mechanicus logo"
                src="/assets/icos/sororitas.png"
              />
              <h3>Adepta Sororitas</h3>
            </div>
          </div>
        </Link>

        <Outlet></Outlet>
      </ul>
    </>
  );
}
