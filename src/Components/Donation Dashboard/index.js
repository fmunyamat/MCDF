import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
// import { XYPlot, LineSeries } from 'react-vis';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    AreaSeries
  } from 'react-vis';

export default function DonationDash() {

    return (
        <div className="donationDash">
            <Container>
                <Row>
                    <Col lg={6}>
                        <h4>Filters</h4>
                    </Col>
                    <Col lg={6}>
                        <div className="donationIcon">
                            <FontAwesomeIcon icon={faMoneyCheckAlt} className="fontIcon" size="3x" />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <h1>HELLO</h1>
                    </Col>
                    <Col lg={6}>
                        <XYPlot width={300} height={300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <AreaSeries
                                // className="area-series-example"
                                curve="curveNatural"
                                data={[{ x: 1, y: 12 }, { x: 2, y: 5 }, { x: 3, y: 15 }]}
                            />
                        </XYPlot>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}