import { Container, Row, Col, Button } from "reactstrap";

export default function UserDashboard() {

    return (
        <>
        <Container fluid={true} className="ua-dashboardContainer">
            <Row>
                <Col>
                <h1 className="ua-dashboardTitle">ACCOUNT DASHBOARD</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="ua-pillMenu">
                <Button className="ua-button">Account Details</Button>
                <Button className="ua-button">Donation History</Button>
                </Col>
                <Col className="ua-dataDashboard">
                
                </Col>
            </Row>
        </Container>
        </>
    )
}