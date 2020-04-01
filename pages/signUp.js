import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../src/Components/Navbar/Navbar';
import SignUpForm from '../src/Components/SignUp Form/SignUpForm';
import axios from 'axios';


export default function SignUp() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);

    const router = useRouter();

    // Set each input field to the values the user types.
    const handleInput = {
        firstNameInput: (e) => setFirstName(e.target.value),
        lastNameInput: (e) => setLastName(e.target.value),
        emailInput: (e) => setEmail(e.target.value),
        passwordInput: (e) => setPassword(e.target.value),
        confirmPassInput: (e) => setConfirmPass(e.target.value)   
    }

    // Create user when signing up
    const handleSubmit = (e) => {

        e.preventDefault();
        
        let emailVal = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

        let userInfo = {
            first_name: firstName,
            last_name: lastName,
            email,
            password
        }
        
        // If any fields are empty, throw error
        if (firstName === null || lastName === null || email === null || password === null || confirmPass === null) {

            alert('Please completely fill in the required fields before continuing.')
        
        // If email is not in the right format, throw error
        } else if (emailVal.test(email) === false) {

            alert('Please enter a valid email address.')
        
        // If password and confirm password do not match, throw error 
        } else if (password !== confirmPass) {

            alert('The two passwords do not match. Please try again.')

            console.log('failed');

        } else {
            
            axios({
                method: 'POST',
                url: '/api/signUp',
                data: userInfo
              });

            console.log('Sign up successful');

            router.push('/login');
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