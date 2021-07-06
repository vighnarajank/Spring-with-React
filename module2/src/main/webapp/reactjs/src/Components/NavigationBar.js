import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {Navbar, Nav} from 'react-bootstrap'

export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Link to="/" className="navbar-brand" >
                        Student Data
                    </Link>
                    <Nav className="me-auto">
                        <Link to="/view" className="nav-link">View</Link>
                        <Link to="/add" className="nav-link">Add</Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
