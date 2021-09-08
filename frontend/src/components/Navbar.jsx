import React, { memo } from 'react';

import {
    NavLink
} from 'react-router-dom';

// importing redux related stuff
import { connect } from 'react-redux';

function Navbar({ isAuthenticated }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <div className="container">
                <NavLink className="navbar-brand text-uppercase" to="/">Dj React Auth</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                exact
                                className="nav-link"
                                activeClassName="active"
                            >Home</NavLink>
                        </li>
                        {
                            isAuthenticated
                                ?
                                <li className="nav-item">
                                    <NavLink
                                        to="/logout"
                                        exact
                                        className="nav-link"
                                        activeClassName="active"
                                    >Logout</NavLink>
                                </li>
                                :
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/login"
                                            exact
                                            className="nav-link"
                                            activeClassName="active"
                                        >Login</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="/register"
                                            exact
                                            className="nav-link"
                                            activeClassName="active"
                                        >Register</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
})

export default connect(
    mapStateToProps,
    null,
)(memo(Navbar))