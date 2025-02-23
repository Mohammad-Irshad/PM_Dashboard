import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4">
            <div className="container">
                {/* Navbar Brand with Styled "H" */}
                <NavLink className="navbar-brand fw-bold" to="/">
                    <span className="text-success">H </span>O U R S
                </NavLink>

                {/* Navbar Toggler for Mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/project">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/team">Team</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/client">Client</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/time">Time</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reports">Reports</NavLink>
                        </li>
                    </ul>

                    {/* User Avatar */}
                    <div className="d-flex align-items-center">
                        <img
                            src="https://i.pravatar.cc/40"
                            alt="User Avatar"
                            className="rounded-circle"
                            width="40"
                            height="40"
                        />
                        <span className="text-white ms-2">Patty</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
