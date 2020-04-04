import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";
import Link from 'next/link';

export default function LoginForm(props) {

    return (
        <>
            <img src="images/homestead.jpg" alt="homestead-pic" className="login-bg"/>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <Form>
                                <img src='images/logo.jpg' className="loginLogo"/>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="username" placeholder="johndoe@gmail.com" onChange={props.email} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" onChange={props.password} required/>
                                </FormGroup>
                                <div className="loginBtnDiv">
                                <Button type="submit" className="loginBtn" onClick={props.handleClick}>Login</Button>
                                <br/>
                                <br/>
                                <Link href="/signup"><a>Don't have an account? Create one!</a></Link>
                                </div>
                                {/* <Link href="/forgotpass"><a>Forgot Password?</a></Link> */}
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}