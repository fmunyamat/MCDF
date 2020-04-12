import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faDonate } from '@fortawesome/free-solid-svg-icons';

export default function UserDashboard(props) {

    return (
        <>
            <Container fluid={true} className="ua-dashboardContainer">
                <Row>
                    <Col className="ua-dashboardTitle">
                        <h1>ACCOUNT DASHBOARD</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2} className="ua-pillMenu">
                        <Button className="ua-button" href=""><FontAwesomeIcon icon={faIdCard} className="fontIcon" /> Contact Details</Button>
                        <Button className="ua-button" href=""><FontAwesomeIcon icon={faDonate} className="fontIcon" /> Donation History</Button>
                    </Col>
                    <Col className="ua-dataDash">
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}