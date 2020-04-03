import { useEffect, useState } from 'react';
import Navbar from '../src/Components/Navbar/Navbar';
import DonateBanner from '../src/Components/Donate Banner';
import axios from 'axios';

export default function Index() {


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

        }

      })
  }, [])

  return (
    <>
      <Navbar />
      <DonateBanner />
    </>
  )
}