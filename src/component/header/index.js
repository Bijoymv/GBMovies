import React from 'react';
import Logo from './../../assets/logo.png';
import { Navbar,Container,Nav} from 'react-bootstrap';
import './style.css';

const Header = (props) => {
    return(
            <header className="comp-header-container" data-test="comp-header-container">
                <Container className="pl-0 pr-0 mr-0 ml-0">
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home" onClick={props.clickMenu}>G&B Movies</Navbar.Brand>
                        <Navbar.Brand href="#home" onClick={props.clickMenu}>
                            <img
                                src={Logo}
                                width="100"
                                height="50"
                                className="d-inline-block align-top"
                                alt="GB Logo"
                                data-test="comp-header-logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href={'#Home'} onClick={props.clickMenu}>
                                    Home
                                </Nav.Link>
                                <Nav.Link href={'#WatchLater'} onClick={props.clickMenu}>
                                    WatchLater
                                </Nav.Link>
                                <Nav.Link href={'#Favourites'} onClick={props.clickMenu}>
                                    Favourites
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </header>
          )
};

export default Header;