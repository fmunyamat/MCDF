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
                                <FormGroup>
                                    <Label className="required" for="firstName">First Name</Label>
                                    <Input type="text" name="firstName" onChange={props.firstName} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="required" for="lastName">Last Name</Label>
                                    <Input type="text" name="lastName" onChange={props.lastName} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="required" for="email">Email</Label>
                                    <Input type="email" name="username" onChange={props.email} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="required" for="password">Password</Label>
                                    <Input type="password" name="password" onChange={props.password} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label className="required" for="password">Confirm Password</Label>
                                    <Input type="password" name="confirmPassword" onChange={props.confirmPass} required/>
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