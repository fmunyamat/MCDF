import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(props) {

    return (
        <>
            <Container fluid="true">
                <Row className="yellow">
                    <Col>
                        <div className="loginLink">
                            <FontAwesomeIcon icon={faUserCircle} className="fontIcon"/><Link href="/login"><a>{props.loginText}</a></Link>
                        </div>
                    </Col>
                </Row>
                <Row className="links">
                    <Col lg={6}>
                        <Link href="/"><a><img src="images/banner.png" alt="test" className="img-fluid mcdfBanner" /></a></Link>
                    </Col>
                    <Col lg={6} className="navLinks">
                        <Link href="/"><a className="navLinkItem">About Us</a></Link>
                        <Link href="/"><a className="navLinkItem">Sponsorship Opportunities</a></Link>
                        <Link href="/"><a className="navLinkItem">Contact Us</a></Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="donateBanner">
                    <p>To fulfill the Great Commission call in Matthew</p>
                    </Col>
                    <Col className="donateBanner">
                    <button>Donate to MCDF</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}