import { useState, useRef } from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import SignUpForm from '../src/Components/SignUp Form/SignUpForm';
import { Container, Row, Col, Form, FormGroup, Label, Input, Card, CardBody, Button } from "reactstrap";
import axios from 'axios';


export default function SignUp() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);

    // Set each input field to the values the user types.
    const handleInput = {
        firstNameInput: (e) => setFirstName(e.target.value),
        lastNameInput: (e) => setLastName(e.target.value),
        emailInput: (e) => setEmail(e.target.value),
        passwordInput: (e) => setPassword(e.target.value),
        confirmPassInput: (e) => setConfirmPass(e.target.value)   
    }

    // Create user on
    const handleSubmit = () => {

        let userInfo = {
            first_name: firstName,
            last_name: lastName,
            email,
            password
        }

        if (firstName === null || lastName === null || email === null || password === null || confirmPass === null) {

            alert('Please completely fill in the required fields before continuing.')

        } else if (password !== confirmPass) {
            alert('The two passwords do not match. Please try again.')

            console.log('failed');

        } else {
            
            axios({
                method: 'post',
                url: '/api/signUp',
                data: userInfo
              });

            console.log('Sign up successful');

            location.replace('/login')
        }
        
    }

    return (
        <>
            <Navbar />
            <SignUpForm firstName={handleInput.firstNameInput} 
                        lastName={handleInput.lastNameInput} 
                        email={handleInput.emailInput} 
                        password={handleInput.passwordInput} 
                        confirmPass={handleInput.confirmPassInput}
                        handleClick={handleSubmit}/>
        </>
    )
}