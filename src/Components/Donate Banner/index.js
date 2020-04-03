import { Row, Col, Button, Container } from "reactstrap";

export default function DonateBanner() {

    return (
        <>
        <Container fluid={true}>
        <Row className="donateBannerRow">
                <Col lg={8} className="donateBanner">
                    <p>To fulfill the Great Commission call in Matthew</p>
                </Col>
                <Col lg={4} className="donateBanner">
                    <Button>Donate to MCDF</Button>
                </Col>
            </Row>
        </Container>
            
        </>
    )
}