import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPray } from '@fortawesome/free-solid-svg-icons';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';

export default function UserAccountNavbar(props) {

    const [login, setLogin] = useState("");
    const [dropdownShow, setDropdownShow] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const router = useRouter();

    async function logout() {
        localStorage.clear();
        document.cookie = 'access_token=""'
        router.push('/');
    }

    async function loginButtonText() {

        let result;

        try {
            result = jwt.verify(localStorage.getItem('token'), process.env.secret_key)
        } catch {
            console.log('Please sign in to access account data.');
        }


        useEffect(() => {
            if (!result) {
                setLogin('Login/Sign Up');
                setDropdownShow(false);
                // localStorage.clear();
            } else {
                setDropdownShow(true);
                setLogin(`${result.firstName} ${result.lastName}`)
            }
        }, [])

    }

    loginButtonText();

    return (
        <>
            <Container fluid="true" className="ua-container">
                <Row>
                    <Col>
                        <Link href="/"><a><img src="images/logo.jpg" alt="mcdf-logo" className="img-fluid ua-mcdfBanner" /></a></Link>
                    </Col>
                    <Col className="ua-navLinks">
                        <Link href="/"><a className="navLinkItem">About Us</a></Link>
                        <Link href="/"><a className="navLinkItem">Sponsorship Opportunities</a></Link>
                        <Link href="/"><a className="navLinkItem">Contact Us</a></Link>
                    </Col>
                    <Col lg={3}>
                        {dropdownShow ? <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret className="loginToggle">
                                <FontAwesomeIcon icon={faUserCircle} className="fontIcon" /> {login}
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link href="/useraccount"><DropdownItem>My Account</DropdownItem></Link>
                                <DropdownItem onClick={() => logout()}>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown> : <Button className="loginToggle" href="/login"><FontAwesomeIcon icon={faUserCircle} className="fontIcon" />{login}</Button>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}