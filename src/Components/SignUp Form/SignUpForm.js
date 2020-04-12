import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";

export default function SignUpForm(props) {

    return (
        <>
            <img src="images/homestead.jpg" alt="homestead-pic" className="signUp-bg"/>
            <Container>
                <Row>
                    <Col>
                        <Card className="signUpCard">
                            <CardBody>
                            <Form>
                                <img src='images/logo.jpg' className="loginLogo"/>
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
                                <div className="signUpBtnDiv">
                                <Button type="submit" className="signUpBtn" onClick={props.handleClick}>Sign Up</Button>
                                </div>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}