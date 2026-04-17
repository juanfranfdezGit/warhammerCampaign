import { useNavigate } from "react-router-dom";
import "./backButton.css";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <div className="backBtn">
        <img
          src="/assets/icos/back.png"
          alt="back btn"
          onClick={() => navigate("/armies")}
        ></img>
      </div>
    </>
  );
}
