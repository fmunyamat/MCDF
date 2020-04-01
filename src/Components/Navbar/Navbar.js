import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    return (
        <>
            <Container fluid="true">
                <Row className="yellow">
                    <Col>
                        <Link href="/"><a><img src="images/banner.png" alt="test" className="img-fluid mcdfBanner" /></a></Link>
                    </Col>
                    <Row className="row-cols-1 green">
                        <Col className="loginLink">
                        <FontAwesomeIcon icon={faUserCircle} /> <Link href="/login"><a className="loginLink">Login/SignUp</a></Link>
                        </Col>
                        <Col lg={{ size: 'auto' }} className="navLinks">
                            <Link href="/"><a>About Us</a></Link>
                            <Link href="/"><a>Sponsorship Opportunities</a></Link>
                            <Link href="/"><a>Contact Us</a></Link>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}