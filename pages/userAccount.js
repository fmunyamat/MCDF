import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import UserAccountNavbar from '../src/Components/User Account Navbar';
import UserDashboard from '../src/Components/User Dashboard';

export default function UserAccount() {

    const router = useRouter();

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
                    // console.log(res.data);
                    // setUserData(res.data);
                    // setLogin(`${res.data.firstName} ${res.data.lastName}`)
                }
            })
    }, [])

    return (
        <>
            <UserAccountNavbar />
            <UserDashboard />
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