import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";

export default function SignUpForm(props) {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <Form>
                                <FormGroup className="mr-4">
                                    <Label for="firstName">First Name</Label>
                                    <Input type="text" name="firstName" onChange={props.firstName}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text" name="lastName" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="username" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Confirm Password</Label>
                                    <Input type="password" name="confirmPassword" />
                                </FormGroup>
                                <Button className="btn btn-primary" onClick={props.handleClick}>Sign Up</Button>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}