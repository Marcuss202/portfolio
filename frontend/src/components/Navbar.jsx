import "./CSS/Navbar.css"
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <>
            <div className="NavBar">
                <div className="row 100vw align-items-center text-center justify-content-center">
                    <div className="col-3 myName text-end">
                        <h4>Markuss Ozols</h4>
                    </div>
                    <Nav className="col-6 navNest justify-content-center" defaultActiveKey="/home" as="ul">
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
                    <div className="col-3 languageChange d-flex text-center">
                        <p className="">Latvian</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar

