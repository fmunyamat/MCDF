import { useState } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../src/Components/Login Form/LoginForm';
import axios from 'axios';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleInput = {
        emailInput: (e) => setEmail(e.target.value),
        passwordInput: (e) => setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {

        e.preventDefault();

        // console.log(email);
        // console.log(password);

        axios({
            method: 'POST',
            url: '/api/login',
            data: {
                email,
                password
            }
          })

        
    }

    return (
        <>
            {/* <Navbar /> */}
            <LoginForm handleClick={handleSubmit} email={handleInput.emailInput} password={handleInput.passwordInput}/>
        </>
    )
}