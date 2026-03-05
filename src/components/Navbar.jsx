const Navbar = () => {
    return (
        <div className="navbar-custom flex items-center justify-between">
            <div className="flex items-center">
                <span className="text-white font-extrabold text-lg tracking-tight">
                    CS — Ticket System
                </span>
            </div>

            <div className="flex items-center gap-6">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">FAQ</a>
                <a href="#" className="nav-link">Changelog</a>
                <a href="#" className="nav-link">Blog</a>
                <a href="#" className="nav-link">Download</a>
                <a href="#" className="nav-link">Contact</a>
                <button className="btn-new-ticket">+ New Ticket</button>
            </div>
        </div>
    );
};

export default Navbar;
