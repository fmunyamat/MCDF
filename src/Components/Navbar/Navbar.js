import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

export default function Navbar() {

    return (
        <>
            <Container fluid="true">
                <Row>
                    <Col lg={{ size: 'auto', offset: 10 }}>
                        <Link href="/"><a className="ml-auto">Home</a></Link>
                        <Link href="/login"><a>Login/Sign Up</a></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}