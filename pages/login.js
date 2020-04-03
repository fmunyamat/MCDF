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

        axios({
            method: 'POST',
            url: '/api/login',
            data: {
                email,
                password
            }
        }).then(response => {
            
                localStorage.setItem('token', response.data.token);
                document.cookie = `access_token=${response.data.token}`;
                router.push('/useraccount');
                return response.data;

        }).catch(e => alert('The email and password combination is invalid. Please try again.'))

    }

    return (
        <>
            <LoginForm handleClick={handleSubmit} email={handleInput.emailInput} password={handleInput.passwordInput} />
        </>
    )
}
