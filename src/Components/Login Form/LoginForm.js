import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";
import Link from 'next/link';

export default function LoginForm() {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="username" placeholder="johndoe@gmail.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" />
                                </FormGroup>
                                <Button className="btn btn-primary">Login</Button>
                                {/* <Link href="/forgotpass"><a>Forgot Password?</a></Link> */}
                                <br/>
                                <Link href="/signup"><a>Don't have an account? Create one!</a></Link>
                            </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}