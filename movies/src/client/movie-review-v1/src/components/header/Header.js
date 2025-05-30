import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash, faUser } from "@fortawesome/free-solid-svg-icons";

import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ "color" : "gold"}}>
                    <FontAwesomeIcon icon={faVideoSlash} /> Gold

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchlist">Watch List</NavLink>

                    </Nav>
                    <Button variant="outline-into" className="me-2">Login</Button>
                    <Button variant="outline-info" className="me-2">Register</Button>
                    <NavLink to="/profile">
                        <Button variant="outline-light">
                            <FontAwesomeIcon icon={faUser} />
                        </Button>
                    </NavLink>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
};

export default Header;