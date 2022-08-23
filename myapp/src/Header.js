import './styles.css';
import React, { Component, useState } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler} from 'reactstrap';
function NavBar(props){
        const [collapsed, setCollapsed] = useState(true);
        const toggleNavbar = () => setCollapsed(!collapsed);
        return(
                <Navbar light expand="lg" className = "position-lg-absolute w-100 top-0">
                        <NavbarBrand href="/" className = "bg-brand mx-lg-5 mx-3">JM</NavbarBrand>
                        <NavbarToggler onClick={toggleNavbar} className = "me-2 flex-column justify-content-end align-items-end"/>
                        <Collapse isOpen={!collapsed} navbar className = "d-lg-flex justify-content-end align-items-end">
                            <Nav navbar className = "d-lg-flex justify-content-end align-items-end mx-3">
                                <NavItem>
                                    <NavLink href="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact">Contact</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
        )
}
class Header extends Component{
    render(){
        return(
            <NavBar />
        )
    }
}
export default Header;