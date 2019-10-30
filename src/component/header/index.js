import React from 'react';
import Logo from './../../assets/logo.png';
import { Navbar,Container,Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';

const Header = (props) => {
    const {clickMenu} = props;
    
    if(!clickMenu){
        return null;
    }
    return(
            <header className="comp-header-container" data-test="comp-header-container">
                <Container className="pl-0 pr-0 mr-0 ml-0" data-test="comp-nav-container">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" data-test="comp-header-nav">
                        <Navbar.Brand href="#home" onClick={props.clickMenu} data-test="comp-header-brandname">G&B Movies</Navbar.Brand>
                        <Navbar.Brand href="#home" onClick={props.clickMenu} data-test="comp-header-logo-container">
                            <img
                                src={Logo}
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                                alt="GB Logo"
                                data-test="comp-header-logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" data-test="comp-header-nav-toggle"/>
                        <Navbar.Collapse id="responsive-navbar-nav" data-test="comp-header-nav-collapse">
                            <Nav className="mr-auto" data-test="comp-header-nav-collapse-inner">
                                <Nav.Link href={'#Home'} onClick={props.clickMenu} data-test="comp-header-menu-home">
                                    Home
                                </Nav.Link>
                                <Nav.Link href={'#WatchLater'} onClick={props.clickMenu} data-test="comp-header-menu-watch">
                                    WatchLater
                                </Nav.Link>
                                <Nav.Link href={'#Favourites'} onClick={props.clickMenu} data-test="comp-header-menu-fav">
                                    Favourites
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
          )
};

Header.propTypes = {
    clickMenu: PropTypes.func
}

export default Header;