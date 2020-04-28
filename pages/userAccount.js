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
    const [userid, setUserId] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    // Edit Contact Details Modal
    const [showModal, setShowModal] = useState(false);

    const router = useRouter();

    // Fill in contact details componenet with existing information.
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
                    setUserId(res.data[0].id)
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

    // Edit Contact Details configuration
    const openModal = () => setShowModal(true);

    const inputChangeState = {
        firstName: (value) => setFirstName(value),
        lastName: (value) => setLastName(value),
        email: (value) => setEmail(value),
        phoneNumber: (value) => setPhone(value),
        address1: (value) => setAddress1(value),
        address2: (value) => setAddress2(value),
        city: (value) => setCity(value),
        state: (value) => setState(value),
        zip: (value) => setZip(value)
    }

    const inputOnChange = {
        firstName: (e) => inputChangeState.firstName(e.target.value),
        lastName: (e) => inputChangeState.lastName(e.target.value),
        email: (e) => inputChangeState.email(e.target.value),
        phoneNumber: (e) => inputChangeState.phoneNumber(e.target.value),
        address1: (e) => inputChangeState.address1(e.target.value),
        address2: (e) => inputChangeState.address2(e.target.value),
        city: (e) => inputChangeState.city(e.target.value),
        state: (e) => inputChangeState.state(e.target.value),
        zip: (e) => inputChangeState.zip(e.target.value)
    }

    
    

        // Update contact info from contact modal
        const handleContactUpdate = () => {
            
        

            // E.g. userid is the same as userid: userid
            let contactInfo = { userid, firstName, lastName, email, phone, address1, address2, city, state, zip }


            axios({
                method: 'PUT',
                url: '/api/contactupdate',
                data: contactInfo,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            setShowModal(false);
        }

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

                    <ContactModal firstName={firstName}
                        firstNameOnChange={inputOnChange.firstName}
                        lastName={lastName}
                        lastNameOnChange={inputOnChange.lastName}
                        email={email}
                        emailOnChange={inputOnChange.email}
                        phone={phone}
                        phoneOnChange={inputOnChange.phoneNumber}
                        address1={address1}
                        address1OnChange={inputOnChange.address1}
                        address2={address2}
                        address2OnChange={inputOnChange.address2}
                        city={city}
                        cityOnChange={inputOnChange.city}
                        state={state}
                        stateOnChange={inputOnChange.state}
                        zip={zip}
                        zipOnChange={inputOnChange.zip}
                        openModal={showModal}
                        contactUpdate={handleContactUpdate} />

                </ContactDetails>
            </UserDashboard>
        </>
    )
}

export async function getServerSideProps(context) {

    let result;

    try {
        result = jwt.verify(context.req.headers.cookie.slice(13), process.env.secret_key)
        // console.log(result);

    } catch (e) {
        console.log(e);
    }

    if (!result) {
        context.res.writeHead(302, { Location: '/login' });
        context.res.end();
        return;
    }

    return {
        props: {
            authenticated: !!result
        }
    }

}