import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import UserAccountNavbar from '../src/Components/User Account Navbar';
import UserDashboard from '../src/Components/User Dashboard';
import ContactDetails from '../src/Components/Contact Details';
import ContactModal from '../src/Components/Contact Modal';

export default function UserAccount() {

    // Contact Details State
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ address1, setAddress1 ] = useState("");
    const [ address2, setAddress2 ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zip, setZip ] = useState("");

    // Edit Contact Details Modal
    const [ showModal, setShowModal ] = useState(false);

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
                    setFirstName(res.data[0].firstName);
                    setLastName(res.data[0].lastName);
                    setEmail(res.data[0].email);
                    setPhone(res.data[1].phone_number);
                    setAddress1(res.data[1].address1);
                    setAddress2(res.data[1].address2);
                    setCity(res.data[1].city);
                    setState(res.data[1].state);
                    setZip(res.data[1].zip)
                }
            })
    }, [])

    const openModal = (e) => {
        e.preventDefault;
        setShowModal(true);
    }

    const closeModal = () => setShowModal(false);

    return (
        <>
            <UserAccountNavbar />
            <UserDashboard>
                <ContactDetails firstName={firstName}
                                lastName={lastName}
                                email={email}
                                phone={phone}
                                address1={address1}
                                address2={address2}
                                city={city}
                                state={state}
                                zip={zip}
                                openModal={openModal}>
                                
                    <ContactModal openModal={showModal} closeModal={closeModal}/>

                </ContactDetails>
            </UserDashboard>
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