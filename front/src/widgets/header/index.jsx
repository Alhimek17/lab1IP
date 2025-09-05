import { ToastMenu } from "@shared/toast/ui";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Backpack3 } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import "./styles.css";

export const Header = () => {
    return (
        <header>
            <Navbar expand="md" variant="dark">
                <Container fluid>
                    <NavbarBrand href="/">
                        <Backpack3 />
                        Мой сайт
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link to="/" as={NavLink}>
                                Главная страница
                            </Nav.Link>
                            <Nav.Link to="/page2" as={NavLink}>
                                Вторая страница
                            </Nav.Link>
                            <Nav.Link to="/page3" as={NavLink}>
                                Третья страница
                            </Nav.Link>
                            <Nav.Link to="/page4" as={NavLink}>
                                Четвертая страница
                            </Nav.Link>
                            <Nav.Link to="/page5" as={NavLink}>
                                Пятая страница
                            </Nav.Link>
                        </Nav>
                        <ToastMenu />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
