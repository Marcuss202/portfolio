import "./CSS/Navbar.css"
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className="NavBar">
                <div className="row 100vw align-items-center text-center justify-content-center">
                    <div className=" col-lg-3 col-12 myName text-center text-lg-end">
                        <Link to="/" className="MyNameButton text-decoration-none">
                            <h4>Markuss Ozols</h4>
                        </Link>
                    </div>
                    <Nav className="col-lg-6 col-12 navNest justify-content-center" defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/about/">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/portfolio/">Portfolio</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/projects/">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/contacts/">Contact me</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="col-3 languageChange d-flex text-center align-items-center">
                        <p className="d-none">Latvian</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar

