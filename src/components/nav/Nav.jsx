import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <Nav defaultActiveKey="/home" as="nav" className="nt-n1">
            <Nav.Item as="li">
                <Nav.Link as={Link} to={"/"}>Pradinis</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={Link} to={"/about"}>Apie projekta 'about'</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link as={Link} to={"/search"}>Paieska</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navigation;