import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";

export default function SignUpForm() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <Form>
                                <FormGroup className="mr-4 row">
                                <div className="input-group">
                                    <Col lg={6}>
                                    <Label for="firstName">First Name</Label>
                                    <Input type="text" name="firstName" />
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text" name="lastName" />
                                    </Col>
                                </div>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="username" className="is-valid"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Confirm Password</Label>
                                    <Input type="password" name="confirmPassword" />
                                </FormGroup>
                                <Button className="btn btn-primary">Sign Up</Button>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}