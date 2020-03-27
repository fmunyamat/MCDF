import { useState, useRef } from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import SignUpForm from '../src/Components/SignUp Form/SignUpForm';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";


export default function SignUp() {

    const [signUp, setSignUp] = useState({
        firstName: null,
        lastName: null
    });

    const handleInput = (e) => {
        setSignUp({
            ...signUp,
            firstName: e.target.value,
            lastName: "Matangira"});
    }

    const handleSubmit = () => {
        localStorage.setItem('First_Name', signUp.firstName)
        localStorage.setItem('Last_Name', signUp.lastName)

        console.log('success');
        
    }

    return (
        <>
            <Navbar />
            <SignUpForm firstName={handleInput} handleClick={handleSubmit}/>
        </>
    )
}