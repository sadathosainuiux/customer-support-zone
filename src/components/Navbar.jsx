import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar-custom">
            <div className="navbar-inner">
                <span className="navbar-logo">CS — Ticket System</span>

                {/* Hamburger button for mobile */}
                <button
                    className="hamburger-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {menuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>

                {/* Desktop & Mobile nav */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">FAQ</a>
                    <a href="#" className="nav-link">Changelog</a>
                    <a href="#" className="nav-link">Blog</a>
                    <a href="#" className="nav-link">Download</a>
                    <a href="#" className="nav-link">Contact</a>
                    <button className="btn-new-ticket">+ New Ticket</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
