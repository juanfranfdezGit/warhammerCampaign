import { useNavigate } from "react-router-dom";
import "./helpButton.css"

export default function HelpButton() {

  const navigate = useNavigate();

  return (
    <>
      <div className="helpArmieBtn" onClick={() => navigate("/help")}>
        <img src="/assets/icos/help.png" alt="help btn"></img>
      </div>
    </>
  );
}
