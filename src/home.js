import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex column">
      <img src="/assets/icos/logo.png" alt="Logo" className="logo" />
      <ul className="campaignsLinks flex column">
        <li>
          <Link to="/campaigns">
            <div className="linkContainer flex column campaign"></div>
          </Link>
        </li>
        <li>
          <Link to="/armies">
            <div className="linkContainer flex column armies"></div>
          </Link>
        </li>
        <li>
          <Link to="/help">
            <div className="linkContainer flex column guides"></div>
          </Link>
        </li>
        <li>
          <Link to="/game">
            <div className="linkContainer flex column games"></div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
