import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <h2><span>WHEELS</span> Moto</h2>
            <nav ref={navRef}>
                <div className="nav-links-container">
                    <a href="/">Home</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contacts</a>
                    <a href="/Services">Services</a>
                    <a href="/Accessories">Accessories</a>
                    <Link to="/status">Check Your Status</Link>
                </div>
                <Link to="/login" className="login-btn">Login</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;