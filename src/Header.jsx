import React from "react";
import { Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
              <Link to="/" className="big-link"> <span className="eeee">E</span>
                <span className="ee">E</span></Link>  
            </div>
            <div>
                <nav className="nav-l">
                    <Link to="/about"className="nav">About</Link>
                    <Link to="/services"className="nav">Services </Link>
                    <Link to="/contact"className="nav"> Contact</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;