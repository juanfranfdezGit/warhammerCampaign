import { Link } from "react-router-dom";
import "./nav.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navLinks flex">
                    <Link to="/"><img src="/assets/icos/logo.png" className="navLogo" alt="Logo" /></Link>
                </ul>
            </nav>
        </>
    );
}