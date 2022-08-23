import '../../../css/styles.css';
import React, { Component, useState } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';
import { BrowserRouter, Route, Link } from "react-router-dom";
function NavBar(props){
        const [collapsed, setCollapsed] = useState(true);
        const toggleNavbar = () => setCollapsed(!collapsed);
        return(
                <Navbar light expand="lg" className = " w-100 top-0">
                        <NavbarBrand href="/" className = "bg-brand mx-lg-5 mx-3">JM</NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className = "me-2 flex-column justify-content-end align-items-end"/>
                        <Collapse isOpen={!collapsed} navbar className = "d-lg-flex justify-content-end align-items-end">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="#about"><i className='fa fa-info'></i>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#skills"><i className="fa-solid fa-code"></i> Skills</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#projects"><i className="fa-solid fa-bars-progress"></i> Projects </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href = "#certificates"><i className="fa-solid fa-certificate"></i>Certificates</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href = "#contact"><i className="fa-solid fa-address-card"></i> Contact </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href = "/Resume.pdf"><i className="fa-solid fa-file"></i> Resume</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
        )
}
class Header extends Component{
    render(){
        return(
            <>
                <NavBar />
                <Link to = "/certificates">Certificates</Link>
            </>
        )
    }
}
export default Header;