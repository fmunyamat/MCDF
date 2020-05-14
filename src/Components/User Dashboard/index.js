import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faDonate } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function UserDashboard(props) {

    return (
        <>
            <Container fluid={true} className="ua-dashboardContainer">
                <Row>
                    <Col lg={2} className="ua-pillMenu">
                        {/* <div className="contactLink">
                            <div className="test">
                            <FontAwesomeIcon icon={faIdCard} className="fontIcon" size="2x"/><Link href="/useraccount"><a>Contact Details</a></Link>
                            </div>
                        </div>
                        <div className="donationLink">
                        <FontAwesomeIcon icon={faDonate} className="fontIcon" size="2x"/><Link href="/useraccount"><a>Donation History</a></Link>
                        </div> */}
                        <Button className="ua-button" href="" onClick={props.contactClick}><FontAwesomeIcon icon={faIdCard} className="fontIcon" /> Contact Details</Button>
                        <Button className="ua-button" href="" onClick={props.donationClick}><FontAwesomeIcon icon={faDonate} className="fontIcon" /> Donation History</Button>
                    </Col>
                    <Col className="ua-dataDash">
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}