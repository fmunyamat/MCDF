import { useState, useEffect } from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import AccountDashboard from '../src/Components/User Account/AccountDashboard';
import axios from 'axios';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
const env = process.env.NODE_ENV || 'development';

export default function UserAccount(props) {

    const [userData, setUserData] = useState();
    const [loginName, setLogin] = useState('Login/Sign Up')
    const router = useRouter();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            router.push('/login');
        }
    })


    useEffect(() => {
        axios
            .get('api/userdata', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                if (res.data.status === 401) {
                    router.push('/login');
                } else {
                    console.log(res.data);
                    setUserData(res.data);
                    setLogin(`${res.data.firstName} ${res.data.lastName}`)

                }

            })
    }, [])

    return (
        <>
            <Navbar loginText={loginName} />
            <AccountDashboard />
        </>
    )
}

export async function getServerSideProps(context) {

    let result;

    try {
        result = jwt.verify(context.req.headers.cookie.slice(13), process.env.secret_key)
        console.log(result);
        
    } catch (e) {
        console.log(e);
    }

    if (!result) {
        context.res.writeHead(302,{Location: '/login'});
        context.res.end();
        return;
    }

    return {
        props: {
            authenticated: !!result
        }
    }

}