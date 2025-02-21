import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";

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
                
            </Container>
        </Navbar>

    )
};

export default Header;